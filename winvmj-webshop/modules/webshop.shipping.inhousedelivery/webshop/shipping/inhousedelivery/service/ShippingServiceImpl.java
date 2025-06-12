package webshop.shipping.inhousedelivery;

import java.util.*;
import java.text.*;

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
import webshop.order.core.*;

public class ShippingServiceImpl extends ShippingServiceDecorator {
    private ShippingFactory shippingFactory = new ShippingFactory();
    private CustomerService customerService = new CustomerServiceImpl();
    private AddressService addressService = new AddressServiceImpl();

    public ShippingServiceImpl (ShippingServiceComponent record) {
        super(record);
    }

    public Shipping saveShipping(HashMap<String, Object> requestBody){
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

        if (!requestBody.containsKey("deliveryTime")) {
            throw new FieldValidationException("Field 'deliveryTime' not found in the request body.");
        }
        
        Object rawScheduledTime = requestBody.get("deliveryTime");

        Date scheduledTime;
        if (rawScheduledTime instanceof String) {
            try {
                String deliveryTimeStr = (String) rawScheduledTime;
                SimpleDateFormat sdf;
                
                // Support for simple date format "yyyy-MM-dd"
                if (deliveryTimeStr.matches("\\d{4}-\\d{2}-\\d{2}")) {
                    sdf = new SimpleDateFormat("yyyy-MM-dd");
                } else {
                    // Original ISO-8601 format
                    sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssXXX");
                }
                
                scheduledTime = sdf.parse(deliveryTimeStr);
            } catch (ParseException e) {
                throw new FieldValidationException("Invalid 'deliveryTime' format.");
            }
        } else if (rawScheduledTime instanceof Date) {
            scheduledTime = (Date) rawScheduledTime;
        } else {
            throw new FieldValidationException("'deliveryTime' must be a string or date.");
        }
        
        String courierContact = "-";
        if (requestBody.containsKey("courierContact")){
            courierContact = (String) requestBody.get("courierContact");
        }
        requestBody.put("courier", "In-House Courier");
        requestBody.put("service", "In-House Delivery");
        requestBody.put("type", "In-House Delivery");
        requestBody.put("weight", "1");
        requestBody.put("shippingCost", "10000");
        requestBody.put("estimation", "1 day");
        requestBody.put("airwayBill", "-");
        
        Shipping shipping = record.saveShipping(requestBody);
        Shipping shippingInHouseDelivery = ShippingFactory.createShipping(
            "webshop.shipping.inhousedelivery.ShippingImpl",
            shipping,
            scheduledTime,
            courierContact
        );

        shippingRepository.saveObject(shippingInHouseDelivery);
        return shippingInHouseDelivery;
    }

    public HashMap<String, Object> getShippingInfo(){
        HashMap<String, Object> info = new HashMap<>();
        info.put("type", "In-House Delivery");
        info.put("description", "Your order will be delivered by our in-house delivery team, ensuring faster and more reliable service within the coverage area.");
        return info;
    }

    public List<Shipping> getAllShipping(String email){
        Customer customer = customerService.getCustomerByEmail(email);
        UUID customerId = customer.getCustomerId();
        List<Shipping> allShipping = shippingRepository.getAllObject("shipping_inhousedelivery");
        List<Shipping> customerShipping = new ArrayList<Shipping>();
        for (Shipping shipping : allShipping){
            if (shipping.getOrder().getCustomer().getCustomerId().equals(customerId)){
                customerShipping.add(shipping);
            }
        }
        return customerShipping;
    }
    
    public List<HashMap<String,Object>> transformShippingListToHashMap(List<Shipping> shippingList){
		List<HashMap<String,Object>> resultList = new ArrayList<HashMap<String,Object>>();
        for(int i = 0; i < shippingList.size(); i++) {
            resultList.add(shippingList.get(i).toHashMap());
        }

        return resultList;
	}
}
