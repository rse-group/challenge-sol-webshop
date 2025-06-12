package webshop.address.core;
import java.util.*;

import vmj.routing.route.VMJExchange;

public interface AddressResource {
    HashMap<String,Object> saveAddress(VMJExchange vmjExchange);
    HashMap<String,Object> updateAddress(VMJExchange vmjExchange);
    HashMap<String,Object> getAddress(VMJExchange vmjExchange);
    List<HashMap<String,Object>> getListAddress(VMJExchange vmjExchange);
    List<HashMap<String,Object>> deleteAddress(VMJExchange vmjExchange);
}
