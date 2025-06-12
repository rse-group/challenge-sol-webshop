package webshop.order.cancel;

import webshop.order.core.OrderResourceDecorator;

import java.util.HashMap;
import java.util.UUID;

import vmj.auth.annotations.Restricted;
import vmj.hibernate.integrator.RepositoryUtil;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import webshop.order.core.*;


public class OrderResourceImpl extends OrderResourceDecorator {
	private OrderService orderService;
    public OrderResourceImpl(OrderResourceComponent recordController, OrderServiceComponent recordService) {
      super(recordController);
      this.orderService = new OrderServiceImpl(recordService);
    }

 	@Restricted(permissionName = "CancelOrder")
    @Route(url="call/order/cancel")
    public HashMap<String, Object> cancelOrder(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		HashMap<String, Object> body = (HashMap<String, Object>) vmjExchange.getPayload();

	    Order order = ((OrderServiceImpl) orderService).cancelOrder(body);
		return order.toHashMap();
    }
}
