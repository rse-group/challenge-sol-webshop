package webshop.customer.core;
import java.util.*;

public abstract class CustomerServiceDecorator extends CustomerServiceComponent{
	protected CustomerServiceComponent record;

    public CustomerServiceDecorator(CustomerServiceComponent record) {
        this.record = record;
    }

	public Customer getCustomerByEmail(String email){
		return record.getCustomerByEmail(email);
	}

	public Customer updatePhoneNumber(String email, HashMap<String, Object> body){
		return record.updatePhoneNumber(email, body);
	}
}
