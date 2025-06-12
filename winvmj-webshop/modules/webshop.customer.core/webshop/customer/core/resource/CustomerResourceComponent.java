package webshop.customer.core;
import java.util.*;

import vmj.hibernate.integrator.RepositoryUtil;
import vmj.routing.route.VMJExchange;
//add other required packages

public abstract class CustomerResourceComponent implements CustomerResource{
	protected RepositoryUtil<Customer> customerRepository;

	public CustomerResourceComponent() { 
        this.customerRepository = new RepositoryUtil<Customer>(webshop.customer.core.CustomerComponent.class);
    }
 
    public abstract HashMap<String, Object> getCustomerDetail(VMJExchange vmjExchange);    
    public abstract HashMap<String, Object> updatePhoneNumber(VMJExchange vmjExchange);
}
