package webshop.order.unauthorized;

import java.util.*;

import vmj.routing.route.VMJExchange;
import vmj.routing.route.exceptions.NotFoundException;
import java.io.IOException;
import com.google.gson.Gson;

import webshop.order.core.OrderServiceDecorator;
import webshop.order.core.*;
import webshop.order.OrderFactory;

public class OrderServiceImpl extends OrderServiceDecorator {
	public OrderServiceImpl(OrderServiceComponent record) {
		super(record);
	}

	public Order saveOrder(HashMap<String, Object> body, String email) {
		Order order = record.saveOrder(body, null);

		UUID orderId = UUID.randomUUID();
		Order unauthorizedOrder = OrderFactory.createOrder("webshop.order.unauthorized.OrderImpl", orderId, order, email);
		orderRepository.saveObject(unauthorizedOrder);
		return order;
	}
}
