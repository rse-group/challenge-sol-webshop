package webshop.cart.core;
import java.util.*;

import vmj.hibernate.integrator.RepositoryUtil;
import vmj.routing.route.VMJExchange;
//add other required packages

public abstract class CartServiceComponent implements CartService{
	protected RepositoryUtil<Cart> cartRepository;

    public CartServiceComponent(){
        this.cartRepository = new RepositoryUtil<Cart>(webshop.cart.core.CartComponent.class);
    }	

    public abstract Cart saveCart(String email);
    public abstract Cart createUnauthorizedCart();
    public abstract Cart updateCart(HashMap<String, Object> requestBody);
	public abstract Cart getCart(UUID cartId);
	public abstract Cart getUnauthorizedCart(String cartIdStr);
    public abstract List<Cart> getAllCart();
    public abstract List<Cart> deleteCart(UUID cartId);
	public abstract Cart getCartByCustomerEmail(String email);
    public abstract List<HashMap<String, Object>> transformCartListToHashMap(List<Cart> cartList);
}
