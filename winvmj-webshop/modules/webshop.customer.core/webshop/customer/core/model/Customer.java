package webshop.customer.core;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import java.util.*;

public interface Customer {
	public UUID getCustomerId();
	public void setCustomerId(UUID customerId);
	public String getEmail();
	public void setEmail(String email);
	public String getName();
	public void setName(String name);
	public String getPhoneNumber();
	public void setPhoneNumber(String phoneNumber);
	HashMap<String, Object> toHashMap();
}
