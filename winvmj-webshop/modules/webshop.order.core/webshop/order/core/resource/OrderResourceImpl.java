package webshop.order.core;
import java.util.*;

import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import vmj.auth.core.*;
import vmj.auth.annotations.Restricted;
import vmj.routing.route.exceptions.NotFoundException;
import webshop.order.OrderFactory;

public class OrderResourceImpl extends OrderResourceComponent{
	private OrderService orderService = new OrderServiceImpl();
	private OrderItemService orderItemService = new OrderItemServiceImpl();

	@Route(url="call/order/validatequantity")
	public HashMap<String, Object> validateQuantity(VMJExchange vmjExchange){
		HashMap<String, Object> body = (HashMap<String, Object>) vmjExchange.getPayload();
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		HashMap<String, Object> result = orderService.validateQuantity(body);
		return result;
	}

	@Route(url="call/order/preview")
    public HashMap<String, Object> previewOrder(VMJExchange vmjExchange){
		String catalogIdStr = vmjExchange.getGETParam("catalogId"); 
		UUID catalogId = UUID.fromString(catalogIdStr);
		String quantityStr = vmjExchange.getGETParam("quantity"); 
		int quantity = Integer.parseInt(quantityStr);
		String amountStr = vmjExchange.getGETParam("amount"); 
		int amount = Integer.parseInt(amountStr);
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		HashMap<String, Object> result = orderService.previewOrder(catalogId, quantity, amount);
		return result;
	}

    @Restricted(permissionName = "Customer")
    @Route(url="call/order/save")
    public HashMap<String, Object> saveOrder(VMJExchange vmjExchange){
		HashMap<String, Object> body = (HashMap<String, Object>) vmjExchange.getPayload();
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		String email =  vmjExchange.getAuthPayload().getEmail();
		Order order = orderService.saveOrder(body, email);
		return order.toHashMap();
	}

	@Restricted(permissionName = "All")
    @Route(url="call/order/detail")
    public HashMap<String, Object> getOrder(VMJExchange vmjExchange){
		String orderIdStr = vmjExchange.getGETParam("orderId"); 
		UUID orderId = UUID.fromString(orderIdStr);
		Order order = orderService.getOrder(orderId);
		return order.toHashMap();
	}
    
    @Restricted(permissionName = "All")
    @Route(url="call/order/history")
    public List<HashMap<String,Object>> getOrderHistory(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		String email =  vmjExchange.getAuthPayload().getEmail();
		List<Order> orderList = orderService.getOrderHistory(email);
		return orderService.transformOrderListToHashMap(orderList);
	}
    
    @Restricted(permissionName = "All")
    @Route(url="call/order/list")
    public List<HashMap<String,Object>> getAllOrder(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		List<Order> orderList = orderService.getAllOrder();
		return orderService.transformOrderListToHashMap(orderList);
	}

	@Restricted(permissionName = "Customer")
	@Route(url="call/orderitem/validatequantity")
	public List<HashMap<String, Object>> validateQuantityOrderItem(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		// HashMap<String, Object> requestBody = (HashMap<String, Object>) vmjExchange.getPayload(); 
		String email =  vmjExchange.getAuthPayload().getEmail();
		return orderItemService.validateQuantity(email);
		// return orderItemService.validateQuantity(requestBody, email);
	}

	@Restricted(permissionName = "Customer")
    @Route(url="call/orderitem/save")
    public List<HashMap<String,Object>> saveOrderItem(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("POST")) {
		    HashMap<String, Object> requestBody = (HashMap<String, Object>) vmjExchange.getPayload(); 
			String email =  vmjExchange.getAuthPayload().getEmail();
			List<OrderItem> result = orderItemService.saveOrderItem(requestBody, email);
			return orderItemService.transformOrderItemListToHashMap(result);
		}
		throw new NotFoundException("Route tidak ditemukan");
	}
	
	@Restricted(permissionName = "Customer")
    @Route(url="call/orderitem/savenow")
    public List<HashMap<String,Object>> saveOrderItemNow(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("POST")) {
		    HashMap<String, Object> requestBody = (HashMap<String, Object>) vmjExchange.getPayload(); 
			String email =  vmjExchange.getAuthPayload().getEmail();
			
			String catalogIdStr = vmjExchange.getGETParam("catalogId"); 
			UUID catalogId = UUID.fromString(catalogIdStr);
			
			List<OrderItem> result = orderItemService.saveOrderItemNow(requestBody, email, catalogId);
			return orderItemService.transformOrderItemListToHashMap(result);
		}
		throw new NotFoundException("Route tidak ditemukan");
	}

	@Restricted(permissionName = "All")
    @Route(url="call/orderitem/detail")
    public HashMap<String, Object> getOrderItem(VMJExchange vmjExchange){
		String orderItemIdStr = vmjExchange.getGETParam("orderItemId"); 
		UUID orderItemId = UUID.fromString(orderItemIdStr);
		OrderItem orderItem = orderItemService.getOrderItem(orderItemId);
		return orderItem.toHashMap();
	}

	@Restricted(permissionName = "All")
    @Route(url="call/orderitem/list")
    public List<HashMap<String,Object>> getAllOrderItem(VMJExchange vmjExchange){
		List<OrderItem> orderItems = orderItemService.getAllOrderItem();
		return orderItemService.transformOrderItemListToHashMap(orderItems);
	}

	@Restricted(permissionName = "All")
    @Route(url="call/orderitem/history")
    public List<HashMap<String,Object>> getOrderItemHistory(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		String orderIdStr = vmjExchange.getGETParam("orderId");
		UUID orderId = UUID.fromString(orderIdStr);
		List<OrderItem> orderItems = orderItemService.getOrderItemHistory(orderId);
		return orderItemService.transformOrderItemListToHashMap(orderItems);
	}
}
