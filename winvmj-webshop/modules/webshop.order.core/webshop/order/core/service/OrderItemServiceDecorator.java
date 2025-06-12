package webshop.order.core;
import java.util.*;

import vmj.routing.route.VMJExchange;
import webshop.catalog.core.Catalog;

public abstract class OrderItemServiceDecorator extends OrderItemServiceComponent{
	protected OrderItemServiceComponent record;

    public OrderItemServiceDecorator(OrderItemServiceComponent record) {
        this.record = record;
    }

	public List<HashMap<String, Object>> validateQuantity(String email){
		return record.validateQuantity(email);
	}
	// public List<HashMap<String, Object>> validateQuantity(HashMap<String, Object> requestBody, String email){
	// 	return record.validateQuantity(requestBody, email);
	// }

	public List<OrderItem> saveOrderItem(HashMap<String, Object> requestBody, String email){
		return record.saveOrderItem(requestBody, email);
	}
	
	public List<OrderItem> saveOrderItemNow(HashMap<String, Object> body, String email, UUID catalogId) {
		return record.saveOrderItemNow(body, email, catalogId);
	}

	public List<OrderItem> createOrderItemNow(HashMap<String, Object> body, Order order, Catalog catalog) {
		return record.createOrderItemNow(body, order, catalog);
	}

	public List<OrderItem> createOrderItem(HashMap<String, Object> body, Order order, String email) {
		return record.createOrderItem(body, order, email);
	}

	public OrderItem createOrderItem(int quantity, Order order, Catalog catalog) {
		return record.createOrderItem(quantity, order, catalog);
	}

	public OrderItem getOrderItem(UUID orderItemId){
		return record.getOrderItem(orderItemId);
	}

	public List<OrderItem> getAllOrderItem(){
		return record.getAllOrderItem();
	}

    public List<HashMap<String,Object>> transformOrderItemListToHashMap(List<OrderItem> orderItems){
		return record.transformOrderItemListToHashMap(orderItems);
	}

	public List<OrderItem> getOrderItemHistory(UUID orderId){
		return record.getOrderItemHistory(orderId);
	}

}
