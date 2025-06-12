package webshop.order.cancel;

import webshop.order.core.OrderServiceDecorator;

import java.util.HashMap;
import java.util.UUID;
import vmj.routing.route.exceptions.NotFoundException;
import vmj.hibernate.integrator.RepositoryUtil;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import webshop.order.core.Order;
import webshop.order.core.OrderImpl;
import webshop.order.core.OrderServiceComponent;

public class OrderServiceImpl extends OrderServiceDecorator {
	
    public OrderServiceImpl(OrderServiceComponent record) {
    	super(record);
    }

    public Order cancelOrder(HashMap<String, Object> body){
    	if (!body.containsKey("orderId")) {
    		throw new NotFoundException("Field 'orderId' not found in the request body.");
    	}
		if (!body.containsKey("message")) {
    		throw new NotFoundException("Field 'message' not found in the request body.");
    	}

	    String orderIdStr = (String) body.get("orderId");
		String message = (String) body.get("message");
	    UUID orderId;
	    try {
	        orderId = UUID.fromString(orderIdStr);
	    } catch (IllegalArgumentException e) {
	        throw new IllegalArgumentException("Invalid UUID format for 'orderId'");
	    }
		return record.updateOrderStatus(orderId, "Canceled");
    }
}
