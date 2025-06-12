package webshop.customer.core;
import java.util.*;

import vmj.routing.route.VMJExchange;

public interface CustomerResource {
    HashMap<String, Object> getCustomerDetail(VMJExchange vmjExchange);
    HashMap<String, Object> updatePhoneNumber(VMJExchange vmjExchange);
}
