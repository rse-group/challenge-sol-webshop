package webshop.cart.core;
import java.util.*;

import vmj.hibernate.integrator.RepositoryUtil;
import vmj.routing.route.VMJExchange;
//add other required packages

public abstract class CartResourceComponent implements CartResource{
	protected RepositoryUtil<Cart> cartRepository;

	public CartResourceComponent() {
        this.cartRepository = new RepositoryUtil<Cart>(webshop.cart.core.CartComponent.class);
	 }
 
    public abstract HashMap<String, Object> saveCart(VMJExchange vmjExchange);    
	public abstract HashMap<String, Object> updateCart(VMJExchange vmjExchange);
    public abstract HashMap<String, Object> getCart(VMJExchange vmjExchange);
    public abstract HashMap<String, Object> getCartUnauthorized(VMJExchange vmjExchange);
    public abstract List<HashMap<String, Object>> getAllCart(VMJExchange vmjExchange);
    public abstract List<HashMap<String, Object>> deleteCart(VMJExchange vmjExchange);
}
