package webshop.shipping.core;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import java.util.*;

import webshop.order.core.*;

public interface Shipping {
	public UUID getShippingId();
	public void setShippingId(UUID shippingId);
	
	public String getCourier();
	public void setCourier(String courier);
	
	public String getService();
	public void setService(String service);
	
	public String getType();
	public void setType(String type);
	
	public int getWeight();
	public void setWeight(int weight);
	
	public int getShippingCost();
	public void setShippingCost(int shippingCost);
	
	public String getEstimation();
	public void setEstimation(String estimation);
	
	public String getAirwayBill();
	public void setAirwayBill(String airwayBill);
	
	public String getStatus();
	public void setStatus(String status);
	
	public Order getOrder();
	public void setOrder(Order order);

	public HashMap<String, Object> toHashMap();
}
