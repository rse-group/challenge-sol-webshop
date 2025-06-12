package webshop.shipping.core;
import java.util.*;

import vmj.routing.route.VMJExchange;

public interface ShippingService {
    Shipping saveShipping(HashMap<String, Object> requestBody);
    Shipping getShippingByOrderId(UUID orderId);
    HashMap<String, Object> getShippingInfo();
    List<Shipping> getAllShipping(String email);
	List<HashMap<String, Object>> transformShippingListToHashMap(List<Shipping> shippingList);
}
