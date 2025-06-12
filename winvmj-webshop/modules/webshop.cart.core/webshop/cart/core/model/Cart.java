package webshop.cart.core;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import webshop.customer.core.Customer;

import java.util.*;

public interface Cart {
	public UUID getCartId();
	public void setCartId(UUID cartId);
	public Customer getCustomer();
	public void setCustomer(Customer customer);
	public int getAmount();
	public void setAmount(int amount);
	HashMap<String, Object> toHashMap();
}
