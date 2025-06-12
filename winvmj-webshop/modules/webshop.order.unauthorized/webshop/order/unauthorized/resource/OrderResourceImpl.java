package webshop.order.unauthorized;

import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import vmj.auth.annotations.Restricted;
import vmj.routing.route.exceptions.*;

import webshop.order.core.*;
import webshop.order.OrderFactory;

public class OrderResourceImpl extends OrderResourceDecorator {
	private OrderService orderService;
	private OrderItemService orderItemService;

	public OrderResourceImpl(OrderResourceComponent recordController, OrderServiceComponent recordService) {
		super(recordController);
		this.orderService = new OrderServiceImpl(recordService);
		this.orderItemService = new OrderItemServiceImpl(new webshop.order.core.OrderItemServiceImpl());
	}

    @Route(url="call/unauthorized/save")
    public List<HashMap<String, Object>> saveOrderItem(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		HashMap<String, Object> body = (HashMap<String, Object>) vmjExchange.getPayload();
		String cartIdStr = vmjExchange.getGETParam("cartId");
		body.put("cartId", cartIdStr);
		if (!body.containsKey("email")){
			throw new FieldValidationException("Field 'email' not found in the request body.");
		}
		String email = (String) body.get("email");
		List<OrderItem> orderItems = ((OrderItemServiceImpl) orderItemService).saveOrderItem(body, email);
		return ((OrderItemServiceImpl) orderItemService).transformOrderItemListToHashMap(orderItems);
	}

	@Route(url="call/unauthorized/savenow")
    public List<HashMap<String, Object>> saveOrderItemNow(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		HashMap<String, Object> body = (HashMap<String, Object>) vmjExchange.getPayload();
		if (!body.containsKey("email")){
			throw new FieldValidationException("Field 'email' not found in the request body.");
		}
		String email = (String) body.get("email");
		String catalogIdStr = vmjExchange.getGETParam("catalogId");
		UUID catalogId = UUID.fromString(catalogIdStr);
		List<OrderItem> orderItems = ((OrderItemServiceImpl) orderItemService).saveOrderItemNow(body, email, catalogId);
		return ((OrderItemServiceImpl) orderItemService).transformOrderItemListToHashMap(orderItems);
	}

}
