package webshop.shipping.selfpickup;

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

public class ShippingServiceImpl extends ShippingServiceDecorator {
    private ShippingFactory shippingFactory = new ShippingFactory();
    private CustomerService customerService = new CustomerServiceImpl();

    public ShippingServiceImpl (ShippingServiceComponent record) {
        super(record);
    }

    public Shipping saveShipping(HashMap<String, Object> requestBody){
        if (!requestBody.containsKey("orderId")){
            throw new FieldValidationException("Field 'orderId' not found in the request body.");
        }

        String pickupLocation = "Store";
        if (requestBody.containsKey("pickupLocation")) {
            pickupLocation = (String) requestBody.get("pickupLocation");
        }
        
        if (!requestBody.containsKey("pickupTime")) {
            throw new FieldValidationException("Field 'pickupTime' not found in the request body.");
        }
        
        Object rawPickupTime = requestBody.get("pickupTime");

        Date pickupTime;
        if (rawPickupTime instanceof String) {
            try {
                String pickupTimeStr = (String) rawPickupTime;
                SimpleDateFormat sdf;
                
                // Support for simple date format "yyyy-MM-dd"
                if (pickupTimeStr.matches("\\d{4}-\\d{2}-\\d{2}")) {
                    sdf = new SimpleDateFormat("yyyy-MM-dd");
                } else {
                    // Original ISO-8601 format
                    sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssXXX");
                }
                
                pickupTime = sdf.parse(pickupTimeStr);
            } catch (ParseException e) {
                throw new FieldValidationException("Invalid 'pickupTime' format.");
            }
        } else if (rawPickupTime instanceof Date) {
            pickupTime = (Date) rawPickupTime;
        } else {
            throw new FieldValidationException("'pickupTime' must be a string or date.");
        }
        
        requestBody.put("courier", "Self Pickup");
        requestBody.put("service", "Self Pickup");
        requestBody.put("type", "Self Pickup");
        requestBody.put("weight", "1");
        requestBody.put("shippingCost", "0");
        requestBody.put("estimation", "-");
        requestBody.put("airwayBill", "-");
        
        Shipping shipping = record.saveShipping(requestBody);
        Shipping shippingSelfPickup = ShippingFactory.createShipping(
            "webshop.shipping.selfpickup.ShippingImpl",
            shipping,
            pickupTime,
            pickupLocation
        );

        shippingRepository.saveObject(shippingSelfPickup);
        return shippingSelfPickup;
    }

    public HashMap<String, Object> getShippingInfo(){
        HashMap<String, Object> info = new HashMap<>();
        info.put("type", "Self Pickup");
        info.put("description", "You can pick up your order directly from our store at your convenience. No delivery fee required.");
        return info;
    }

    public List<Shipping> getAllShipping(String email){
        Customer customer = customerService.getCustomerByEmail(email);
        UUID customerId = customer.getCustomerId();
        List<Shipping> allShipping = shippingRepository.getAllObject("shipping_selfpickup");
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
