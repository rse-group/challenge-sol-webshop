package webshop.customer.core;
import java.util.*;

import vmj.routing.route.VMJExchange;

public interface CustomerService {
	Customer getCustomerByEmail(String email);
	Customer updatePhoneNumber(String email, HashMap<String, Object> body);
}
