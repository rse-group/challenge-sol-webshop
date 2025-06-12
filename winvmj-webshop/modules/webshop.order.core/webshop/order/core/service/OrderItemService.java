package webshop.order.core;
import java.util.*;

import vmj.routing.route.VMJExchange;
import webshop.catalog.core.Catalog;

public interface OrderItemService {
	// List<HashMap<String, Object>> validateQuantity(HashMap<String, Object> requestBody, String email);
	List<HashMap<String, Object>> validateQuantity(String email);
	List<OrderItem> saveOrderItem(HashMap<String, Object> requestBody, String email);
	List<OrderItem> saveOrderItemNow(HashMap<String, Object> body, String email, UUID catalogId);
	List<OrderItem> createOrderItemNow(HashMap<String, Object> body, Order order, Catalog catalog);
	List<OrderItem> createOrderItem(HashMap<String, Object> body, Order order, String email);
	OrderItem getOrderItem(UUID orderItemId);
	OrderItem createOrderItem(int quantity, Order order, Catalog catalog);
	List<OrderItem> getAllOrderItem();
	List<HashMap<String, Object>> transformOrderItemListToHashMap(List<OrderItem> orderItems);
	List<OrderItem> getOrderItemHistory(UUID orderId);
}
