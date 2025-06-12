package webshop.order.core;
import java.util.*;
import vmj.hibernate.integrator.RepositoryUtil;
import vmj.routing.route.VMJExchange;
import webshop.catalog.core.Catalog;
//add other required packages

public abstract class OrderItemServiceComponent implements OrderItemService{
	protected RepositoryUtil<OrderItem> orderItemRepository;
    protected RepositoryUtil<Order> orderRepository;

    public OrderItemServiceComponent(){
        this.orderItemRepository = new RepositoryUtil<OrderItem>(webshop.order.core.OrderItemComponent.class);
        this.orderRepository = new RepositoryUtil<Order>(webshop.order.core.OrderComponent.class);
    }

    // public abstract List<HashMap<String, Object>> validateQuantity(HashMap<String, Object> requestBody, String email);
    public abstract List<HashMap<String, Object>> validateQuantity(String email);
    public abstract List<OrderItem> saveOrderItem(HashMap<String, Object> requestBody, String email);
    public abstract List<OrderItem> saveOrderItemNow(HashMap<String, Object> body, String email, UUID catalogId);
    public abstract List<OrderItem> createOrderItemNow(HashMap<String, Object> body, Order order, Catalog catalog);
	public abstract List<OrderItem> createOrderItem(HashMap<String, Object> body, Order order, String email);
	public abstract OrderItem createOrderItem(int quantity, Order order, Catalog catalog);
	public abstract OrderItem getOrderItem(UUID orderItemId);
    public abstract List<OrderItem> getAllOrderItem();
    public abstract List<HashMap<String,Object>> transformOrderItemListToHashMap(List<OrderItem> orderItems);
    public abstract List<OrderItem> getOrderItemHistory(UUID orderId);
}
