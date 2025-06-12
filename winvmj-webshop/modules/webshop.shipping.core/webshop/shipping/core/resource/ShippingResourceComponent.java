package webshop.shipping.core;
import java.util.*;

import vmj.hibernate.integrator.RepositoryUtil;
import vmj.routing.route.VMJExchange;
//add other required packages

public abstract class ShippingResourceComponent implements ShippingResource{
	protected RepositoryUtil<Shipping> shippingRepository;
	public ShippingResourceComponent() { 
		this.shippingRepository = new RepositoryUtil<Shipping>(webshop.shipping.core.ShippingComponent.class);
	}
 
    public abstract HashMap<String,Object> saveShipping(VMJExchange vmjExchange);
    public abstract HashMap<String, Object> getShippingByOrderId(VMJExchange vmjExchange);
    public abstract HashMap<String, Object> getShippingInfo(VMJExchange vmjExchange);
    public abstract List<HashMap<String,Object>> getAllShipping(VMJExchange vmjExchange);

}
