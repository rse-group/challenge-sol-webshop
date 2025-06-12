package webshop.customer.core;
import java.util.*;

import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

public abstract class CustomerResourceDecorator extends CustomerResourceComponent{
	protected CustomerResourceComponent record;

    public CustomerResourceDecorator(CustomerResourceComponent record) {
        this.record = record;
    }

    public HashMap<String, Object> getCustomerDetail(VMJExchange vmjExchange){
		return record.getCustomerDetail(vmjExchange);
	}

    public HashMap<String, Object> updatePhoneNumber(VMJExchange vmjExchange){
		return record.updatePhoneNumber(vmjExchange);
	}
}
