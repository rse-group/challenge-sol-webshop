package webshop.shipping.externalcourier;

import com.google.gson.Gson;
import java.util.*;
import java.util.logging.Logger;
import java.io.File;
import java.io.IOException;
import java.lang.*;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.*;
import vmj.routing.route.VMJExchange;

import vmj.routing.route.exceptions.*;
import webshop.shipping.ShippingFactory;
import webshop.shipping.core.ShippingDecorator;
import webshop.shipping.core.ShippingServiceComponent;
import webshop.shipping.core.ShippingServiceDecorator;
import webshop.shipping.core.ShippingComponent;
import webshop.shipping.core.Shipping;
import webshop.customer.core.*;
import webshop.address.core.*;
import webshop.address.core.Address;
import webshop.config.core.*;
import webshop.order.core.*;

public class ShippingServiceImpl extends ShippingServiceDecorator {
    private ShippingFactory shippingFactory = new ShippingFactory();
    private CustomerService customerService = new CustomerServiceImpl();
    private OrderItemService orderItemService = new OrderItemServiceImpl();
    private AddressService addressService = new AddressServiceImpl();
    
    public ShippingServiceImpl(ShippingServiceComponent record) {
        super(record);
    }

    public Shipping saveShipping(HashMap<String, Object> requestBody) {
        ApiClient apiClient = new ApiClient();

        if (!requestBody.containsKey("orderId")){
            throw new FieldValidationException("Field 'orderId' not found in the request body.");
        }
        String orderIdStr = (String) requestBody.get("orderId");
		UUID orderId = UUID.fromString(orderIdStr);
		Order order = orderRepository.getObject(orderId);

        if (!requestBody.containsKey("addressId")){
            throw new FieldValidationException("Field 'addressId' not found in the request body.");
        } 
        String addressIdStr = (String) requestBody.get("addressId");
		UUID addressId = UUID.fromString(addressIdStr);
		Address address = addressService.getAddress(addressId);
       
        order.setAddress(address);
        orderRepository.updateObject(order);
        order = orderRepository.getObject(orderId);

        int destinationId = searchDestinationId(apiClient, address.getCity(), address.getProvince(), address.getDistrict(),
                address.getSubdistrict(), address.getZipcode());

        int weight = 1; // TODO: get weight from order item
        int orderValue = order.getAmount();

        if (!requestBody.containsKey("courier")) {
            throw new NotFoundException("Field 'courier' not found in the request body.");
        }
        String courier = (String) requestBody.get("courier");

        if (!requestBody.containsKey("service")) {
            throw new NotFoundException("Field 'service' not found in the request body.");
        }
        String service = (String) requestBody.get("service");

        if (!requestBody.containsKey("type")) {
            throw new NotFoundException("Field 'type' not found in the request body.");
        }
        String type = (String) requestBody.get("type");

        // calculate shipping cost
        List<HashMap<String, Object>> shippingOptions = previewShippingOptions(apiClient, orderId, addressId, destinationId, weight, orderValue);
        // get by courier, service, type
        HashMap<String, Object> shippingOption = shippingOptions.stream()
                .filter(option -> option.get("courier").equals(courier) && option.get("service").equals(service)
                        && option.get("type").equals(type))
                .findFirst()
                .orElse(null);
        System.out.println("shippingOption: " + shippingOption);
        int shippingCost = (int) shippingOption.get("shippingCost");
        String estimation = (String) shippingOption.get("estimation");

        // Panggil API untuk menyimpan pesanan ke kurir eksternal
        String airwayBill = "-";
        try {
            airwayBill = getAirwayBill(apiClient, order, destinationId, courier, type, shippingCost);
        } catch (Exception e) {
            throw new BadRequestException("Error store shipping order: " + e.getMessage());
        }

        requestBody.put("courier", courier);
        requestBody.put("service", service);
        requestBody.put("type", type);
        requestBody.put("weight", String.valueOf(weight));
        requestBody.put("shippingCost", String.valueOf(shippingCost));
        requestBody.put("estimation", estimation);
        requestBody.put("airwayBill", airwayBill);

        Shipping shipping = record.saveShipping(requestBody);
        Shipping shippingExternalCourier = ShippingFactory.createShipping(
                "webshop.shipping.externalcourier.ShippingImpl",
                shipping);

        shippingRepository.saveObject(shippingExternalCourier);
        return shippingExternalCourier;
    }

    public List<HashMap<String, Object>> getShippingOptions(HashMap<String, Object> requestBody) {
        ApiClient apiClient = new ApiClient();

        if (!requestBody.containsKey("orderId")) {
            throw new FieldValidationException("Field 'orderId' not found in the request body.");
        }
        UUID orderId = UUID.fromString(requestBody.get("orderId").toString());
        Order order = orderRepository.getObject(orderId);
        UUID addressId = UUID.fromString(requestBody.get("addressId").toString());
        Address address = addressService.getAddress(addressId);
        int destinationId = searchDestinationId(apiClient, address.getCity(), address.getProvince(),
                address.getDistrict(), address.getSubdistrict(), address.getZipcode());
        System.out.println("getShippingOptions destinationId: " + destinationId);
        int weight = 1; // TODO: get weight from order item
        int orderValue = order.getAmount();

        List<HashMap<String, Object>> shippingOptions = previewShippingOptions(apiClient, orderId, addressId, destinationId,
                weight, orderValue);
        System.out.println("getShippingOptions shippingOptions: " + shippingOptions);
        return shippingOptions;
    }

    private List<HashMap<String, Object>> previewShippingOptions(ApiClient apiClient, UUID orderId, UUID addressId, int destinationId,
            int weight,
            int orderValue) {
        List<HashMap<String, Object>> flatShippingOptions = new ArrayList<>();

        try {
            String costResponse = apiClient.calculateCost(destinationId, weight, orderValue);
            ObjectMapper mapper = new ObjectMapper();
            JsonNode rootNode = mapper.readTree(costResponse);
            JsonNode dataNode = rootNode.path("data");

            Iterator<String> fieldNames = dataNode.fieldNames();
            while (fieldNames.hasNext()) {
                String type = fieldNames.next(); // e.g. "calculate_reguler", "calculate_cargo", "calculate_instant"
                JsonNode shippingArray = dataNode.get(type);

                if (shippingArray.isArray()) {
                    for (JsonNode shippingOption : shippingArray) {
                        HashMap<String, Object> flatOption = new HashMap<>();
                        flatOption.put("addressId", addressId.toString());
                        flatOption.put("orderId", orderId.toString());
                        flatOption.put("courier", shippingOption.path("shipping_name").asText());
                        flatOption.put("service", shippingOption.path("service_name").asText());
                        flatOption.put("type", type.replace("calculate_", "")); // simplify type
                        flatOption.put("shippingCost", shippingOption.path("shipping_cost").asInt());
                        flatOption.put("estimation", shippingOption.path("etd").asText());

                        flatShippingOptions.add(flatOption);
                    }
                }
            }
            return flatShippingOptions;

        } catch (IOException e) {
            throw new RuntimeException("Failed to fetch shipping cost", e);
        } catch (Exception e) {
            throw new RuntimeException("Failed to parse cost response", e);
        }
    }

    private String getAirwayBill(ApiClient apiClient, Order order, int destinationId, String courier, String serviceType, int shippingCost) throws IOException, InterruptedException {
        try {
            String response = storeShipping(apiClient, order, destinationId, courier, serviceType, shippingCost);
            System.out.println("getAirwayBill response: " + response);
            // Parse respons untuk mendapatkan order_id sebagai airway bill
            ObjectMapper mapper = new ObjectMapper();
            JsonNode rootNode = mapper.readTree(response);
            
            if (rootNode.path("meta").path("status").asText().equals("success")) {
                JsonNode dataNode = rootNode.path("data");
                String airwayBill = String.valueOf(dataNode.path("order_id").asInt());
                System.out.println("Berhasil membuat pengiriman dengan Order ID: " + airwayBill);
                return airwayBill;
            } else {
                String errorMessage = rootNode.path("meta").path("message").asText();
                System.out.println("Gagal membuat pengiriman: " + errorMessage);
                // Mungkin bisa throw exception di sini
            }
        } catch (Exception e) {
            System.out.println("Error saat membuat pengiriman: " + e.getMessage());
            e.printStackTrace();
            // Mungkin bisa throw exception di sini
        }
        return null;
    }

    private String storeShipping(ApiClient apiClient, Order order, int destinationId, String courier, String serviceType, int shippingCost) throws IOException, InterruptedException {
        // Membuat JSON payload untuk API storeOrder
        Address address = order.getAddress();
        Customer customer = order.getCustomer();
        
        Map<String, Object> orderData = new HashMap<>();
        
        // Format tanggal saat ini untuk order_date
        String orderDate = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date());
        
        orderData.put("order_date", orderDate);
        orderData.put("brand_name", "Webshop");
        orderData.put("shipper_name", "Webshop Official Store");
        orderData.put("shipper_phone", "6281234567689"); // Nomor telepon toko
        orderData.put("shipper_destination_id", 17471); // Hardcoded Jakarta
        orderData.put("shipper_address", "Jl. Webshop Jakarta");
        orderData.put("shipper_email", "orders@webshop.com");
        
        // Data penerima
        orderData.put("receiver_name", customer.getName());
        orderData.put("receiver_phone", customer.getPhoneNumber());
        orderData.put("receiver_destination_id", destinationId);
        orderData.put("receiver_address", address.getStreet() + ", " + 
                     address.getSubdistrict() + ", " + 
                     address.getDistrict() + ", " + 
                     address.getCity() + ", " + 
                     address.getProvince() + " " + 
                     address.getZipcode());
        
        // Data pengiriman
        orderData.put("shipping", courier);
        orderData.put("shipping_type", serviceType);
        orderData.put("payment_method", "BANK TRANSFER");
        orderData.put("shipping_cost", shippingCost);
        orderData.put("shipping_cashback", 0);
        orderData.put("service_fee", 0);
        orderData.put("additional_cost", 0);
        
        int grandTotal = order.getAmount() + shippingCost;
        orderData.put("grand_total", grandTotal);
        orderData.put("cod_value", 0);
        orderData.put("insurance_value", 0);
        
        // Order details
        List<Map<String, Object>> orderDetails = new ArrayList<>();
        List<OrderItem> orderItems = orderItemService.getOrderItemHistory(order.getOrderId());
        
        for (OrderItem item : orderItems) {
            Map<String, Object> detail = new HashMap<>();
            detail.put("product_name", item.getCatalog().getName());
            detail.put("product_variant_name", "");
            detail.put("product_price", item.getCatalog().getPrice());
            detail.put("product_width", 1);
            detail.put("product_height", 1);
            detail.put("product_weight", 1);
            detail.put("product_length", 1);
            detail.put("qty", item.getQuantity());
            detail.put("subtotal", item.getSubtotal());
            
            orderDetails.add(detail);
        }
        orderData.put("order_details", orderDetails);
        
        // Konversi ke JSON
        Gson gson = new Gson();
        String jsonOrderData = gson.toJson(orderData);
        
        // Memanggil API
        return apiClient.storeOrder(jsonOrderData);
    }
    
    private int searchDestinationId(ApiClient apiClient, String city, String province, String district, String subdistrict, int zipcode) {
        try {
            // Coba cari berdasarkan kode pos terlebih dahulu
            String response = apiClient.searchDestination(String.valueOf(zipcode));

            ObjectMapper mapper = new ObjectMapper();
            JsonNode rootNode = mapper.readTree(response);
            JsonNode dataNode = rootNode.path("data");

            if (!dataNode.isArray() || dataNode.size() == 0) {
                throw new RuntimeException("No destination found for zip code: " + zipcode);
            }

            // Cari yang paling cocok dengan parameter yang diberikan
            for (JsonNode destination : dataNode) {
                String destCity = destination.path("city_name").asText().trim();
                String destProvince = destination.path("province_name").asText().trim();
                String destDistrict = destination.path("district_name").asText().trim();
                String destSubdistrict = destination.path("subdistrict_name").asText().trim();

                // Cek exact match untuk semua field
                if (destCity.equalsIgnoreCase(city.trim())
                        && destProvince.equalsIgnoreCase(province.trim())
                        && destDistrict.equalsIgnoreCase(district.trim())
                        && destSubdistrict.equalsIgnoreCase(subdistrict.trim())) {
                    return destination.path("id").asInt();
                }
            }

            // Jika tidak ada exact match, cari partial match dengan prioritas
            for (JsonNode destination : dataNode) {
                String destCity = destination.path("city_name").asText().trim();
                String destProvince = destination.path("province_name").asText().trim();
                String destDistrict = destination.path("district_name").asText().trim();
                String destSubdistrict = destination.path("subdistrict_name").asText().trim();

                // Prioritas: kota dan provinsi harus match
                if (destCity.equalsIgnoreCase(city.trim())
                        && destProvince.equalsIgnoreCase(province.trim())) {
                    // Jika kecamatan dan kelurahan juga match, lebih baik
                    if (destDistrict.equalsIgnoreCase(district.trim())
                            && destSubdistrict.equalsIgnoreCase(subdistrict.trim())) {
                        return destination.path("id").asInt();
                    }
                    // Jika hanya kota dan provinsi yang match, simpan sebagai fallback
                    return destination.path("id").asInt();
                }
            }

            // Jika tidak ada yang cocok sama sekali, ambil yang pertama
            return dataNode.get(0).path("id").asInt();

        } catch (Exception e) {
            throw new RuntimeException("Failed to get destination ID", e);
        }
    }

    public HashMap<String, Object> getShippingInfo() {
        HashMap<String, Object> info = new HashMap<>();
        info.put("type", "External Courier");
        info.put("description",
                "Your order will be handled by a third-party courier service for wider coverage and flexible delivery options.");
        return info;
    }

    public List<Shipping> getAllShipping(String email) {
        Customer customer = customerService.getCustomerByEmail(email);
        UUID customerId = customer.getCustomerId();
        List<Shipping> allShipping = shippingRepository.getAllObject("shipping_externalcourier");
        List<Shipping> customerShipping = new ArrayList<Shipping>();
        for (Shipping shipping : allShipping) {
            if (shipping.getOrder().getCustomer().getCustomerId().equals(customerId)) {
                customerShipping.add(shipping);
            }
        }
        return customerShipping;
    }

    public List<HashMap<String, Object>> transformShippingListToHashMap(List<Shipping> shippingList) {
        List<HashMap<String, Object>> resultList = new ArrayList<HashMap<String, Object>>();
        for (int i = 0; i < shippingList.size(); i++) {
            resultList.add(shippingList.get(i).toHashMap());
        }

        return resultList;
    }
}
