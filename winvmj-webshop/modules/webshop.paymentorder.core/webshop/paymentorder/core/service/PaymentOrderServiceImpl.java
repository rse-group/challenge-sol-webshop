package webshop.paymentorder.core;
import java.util.*;
import webshop.order.core.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import webshop.order.core.*;
import webshop.paymentorder.PaymentOrderFactory;
import vmj.auth.annotations.Restricted;

public class PaymentOrderServiceImpl extends PaymentOrderServiceComponent{
	OrderService orderService = new OrderServiceImpl();
    public PaymentOrder createPaymentOrder(String paymentId, String paymentStatus, String paymentMethod, Order order){
		UUID paymentOrderId = UUID.randomUUID();
		PaymentOrder paymentOrder = PaymentOrderFactory.createPaymentOrder("webshop.paymentorder.core.PaymentOrderImpl", paymentOrderId, paymentId, paymentStatus, paymentMethod, order);
		paymentOrderRepository.saveObject(paymentOrder);
		return paymentOrder;
	}

	public List<Order> getUnpaidOrderHistory(String email){
    	List<Order> orderHistory = orderService.getOrderHistory(email);
		orderHistory.removeIf(order -> !"Not Paid".equals(order.getStatus()));
		return orderHistory;
	}


}
