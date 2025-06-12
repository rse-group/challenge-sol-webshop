package webshop.customer.core;
import java.util.*;

import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import vmj.routing.route.exceptions.*;
import webshop.customer.CustomerFactory;
import vmj.auth.annotations.Restricted;
//add other required packages

public class CustomerResourceImpl extends CustomerResourceComponent{
	
	private CustomerServiceImpl customerService = new CustomerServiceImpl();

	@Restricted(permissionName = "Customer")
    @Route(url="call/customer/detail")
    public HashMap<String, Object> getCustomerDetail(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		String email = vmjExchange.getAuthPayload().getEmail();
		Customer customer = customerService.getCustomerByEmail(email);
		return customer.toHashMap();
	}

	@Restricted(permissionName = "Customer")
    @Route(url="call/customer/updatephonenumber")
    public HashMap<String, Object> updatePhoneNumber(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		String email = vmjExchange.getAuthPayload().getEmail();
		HashMap<String, Object> body = (HashMap<String, Object>) vmjExchange.getPayload(); 
		Customer customer = customerService.updatePhoneNumber(email, body);
		return customer.toHashMap();
	}
}
