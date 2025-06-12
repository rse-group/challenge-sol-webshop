package webshop.cart.core;
import java.util.*;
import com.google.gson.Gson;
import java.util.logging.Logger;
import java.io.File;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import vmj.routing.route.exceptions.*;
import webshop.cart.CartFactory;
import webshop.customer.core.*;
//add other required packages

public class CartServiceImpl extends CartServiceComponent{
	private CustomerService customerService = new CustomerServiceImpl();

    public Cart saveCart(String email){
        if (email == null) {
            return null;
        }
        Customer customer = customerService.getCustomerByEmail(email);
		UUID cartId = UUID.randomUUID();
        Cart cart = CartFactory.createCart("webshop.cart.core.CartImpl", cartId, customer);
        cartRepository.saveObject(cart);
        return cart;
    }
    
    public Cart createUnauthorizedCart(){
		UUID cartId = UUID.randomUUID();
        Cart cart = CartFactory.createCart("webshop.cart.core.CartImpl", cartId);
        cartRepository.saveObject(cart);
        return cart;
    }

    public Cart updateCart(HashMap<String, Object> requestBody){
		if (!requestBody.containsKey("cartId")) {
    		throw new NotFoundException("Field 'cartId' not found in the request body.");
    	}
		String cartIdStr = (String) requestBody.get("cartId");
		UUID cartId = UUID.fromString(cartIdStr);
		Cart cart = cartRepository.getObject(cartId);
		if (cart == null) {
	        throw new NotFoundException("Cart with cartId " + cartId +" not found");
	    }
		
		cartRepository.updateObject(cart);
		cart = cartRepository.getObject(cartId);

		return cart;
		
	}

    public Cart getCart(UUID cartId){
		Cart cart = cartRepository.getObject(cartId);
		if (cart == null) {
	        throw new NotFoundException("Cart with cartId " + cartId +" not found");
	    }
		return cart;
	}
    
    public Cart getUnauthorizedCart(String cartIdStr){
		if (cartIdStr == null || cartIdStr.isEmpty()) {
			return createUnauthorizedCart();
		}
		try {
			return getCart(UUID.fromString(cartIdStr));
		} catch (IllegalArgumentException e) { // invalid UUID
			return createUnauthorizedCart();
		}
	}

    public List<Cart> getAllCart(){
		List<Cart> cartList = cartRepository.getAllObject("cart_impl");
		return cartList;
	}

    public List<HashMap<String,Object>> transformCartListToHashMap(List<Cart> cartList){
        List<HashMap<String,Object>> resultList = new ArrayList<HashMap<String,Object>>();
        for(int i = 0; i < cartList.size(); i++) {
            resultList.add(cartList.get(i).toHashMap());
        }

        return resultList;
	}

    public List<Cart> deleteCart(UUID cartId){
		// Hard delete
		cartRepository.deleteObject(cartId);
		return getAllCart();
	}

	public Cart getCartByCustomerEmail(String email){
		Customer customer = customerService.getCustomerByEmail(email);
    	UUID customerId = customer.getCustomerId();
		List<Cart> cartList = cartRepository.getListObject("cart_comp", "customer_customerid", customerId);
		if (!cartList.isEmpty()) {
			Cart cart = cartList.get(0);
			if (cart.getCustomer().getEmail().equals(email)) {
				return cart;
			}
		}
		return null;
	}
}
