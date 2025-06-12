package webshop.order.core;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import java.util.*;

import webshop.catalog.core.*;
import webshop.order.core.*;


public interface OrderItem {
	public UUID getOrderItemId();
	public void setOrderItemId(UUID orderItemId);
	public int getQuantity();
	public void setQuantity(int quantity);
	public Order getOrder();
	public void setOrder(Order order);
	public Catalog getCatalog();
	public void setCatalog(Catalog catalog);
	public int getSubtotal();
	HashMap<String, Object> toHashMap();
}
