package webshop.order.core;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import java.util.*;
import webshop.customer.core.*;
import webshop.address.core.*;

public interface Order {

    public UUID getOrderId();
    public void setOrderId(UUID orderId);

    public String getStatus();
    public void setStatus(String status);

    public Date getDate();
    public void setDate(Date date);

    public int getAmount();
    public void setAmount(int amount);

    public Address getAddress();
	public void setAddress(Address address);

    public Customer getCustomer();
    public void setCustomer(Customer customer);

    public HashMap<String, Object> toHashMap();
}
