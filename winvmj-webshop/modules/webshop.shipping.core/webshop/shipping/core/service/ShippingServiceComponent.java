package webshop.shipping.core;
import java.util.*;
import webshop.order.core.*;
import vmj.hibernate.integrator.RepositoryUtil;
import vmj.routing.route.VMJExchange;
//add other required packages

public abstract class ShippingServiceComponent implements ShippingService{
    protected RepositoryUtil<Shipping> shippingRepository;
    protected RepositoryUtil<Order> orderRepository;

    public ShippingServiceComponent(){
        this.shippingRepository = new RepositoryUtil<Shipping>(webshop.shipping.core.ShippingComponent.class);
        this.orderRepository = new RepositoryUtil<Order>(webshop.order.core.OrderComponent.class);
    }	

    public abstract Shipping saveShipping(HashMap<String, Object> requestBody);
    public abstract HashMap<String, Object> getShippingInfo();
    public abstract Shipping getShippingByOrderId(UUID orderId);
    public abstract List<Shipping> getAllShipping(String email);
    public abstract List<HashMap<String,Object>> transformShippingListToHashMap(List<Shipping> shippingList);

}
