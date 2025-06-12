package webshop.cart.core;
import java.util.*;

import vmj.routing.route.VMJExchange;

public abstract class CartServiceDecorator extends CartServiceComponent{
	protected CartServiceComponent record;

    public CartServiceDecorator(CartServiceComponent record) {
        this.record = record;
    }

	public Cart saveCart(String email){
		return record.saveCart(email);
	}
	
	public Cart createUnauthorizedCart(){
		return record.createUnauthorizedCart();
	}
	
	public Cart updateCart(HashMap<String, Object> requestBody){
		return record.updateCart(requestBody);
	}

	public Cart getCart(UUID cartId){
		return record.getCart(cartId);
	}
	
	public Cart getUnauthorizedCart(String cartIdStr){
		return record.getUnauthorizedCart(cartIdStr);
	}

	public List<Cart> getAllCart(){
		return record.getAllCart();
	}

    public List<HashMap<String,Object>> transformCartListToHashMap(List<Cart> cartList){
		return record.transformCartListToHashMap(cartList);
	}

    public List<Cart> deleteCart(UUID cartId){
		return record.deleteCart(cartId);
	}

	public Cart getCartByCustomerEmail(String email){
		return record.getCartByCustomerEmail(email);
	}
}
