package webshop.shipping.core;
import java.util.*;

import vmj.routing.route.VMJExchange;

public interface ShippingResource {
    HashMap<String,Object> saveShipping(VMJExchange vmjExchange);
    HashMap<String, Object> getShippingByOrderId(VMJExchange vmjExchange);
    HashMap<String, Object> getShippingInfo(VMJExchange vmjExchange);
    List<HashMap<String,Object>> getAllShipping(VMJExchange vmjExchange);
}
