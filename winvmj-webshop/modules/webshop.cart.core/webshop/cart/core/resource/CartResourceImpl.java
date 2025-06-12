package webshop.cart.core;
import java.util.*;

import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import vmj.routing.route.exceptions.*;
import webshop.cart.CartFactory;
import webshop.cart.core.*;
import vmj.auth.annotations.Restricted;
import vmj.auth.core.*;
//add other required packages

public class CartResourceImpl extends CartResourceComponent{
	
	private CartService cartService = new CartServiceImpl();
	private CartItemService cartItemService = new CartItemServiceImpl();

	@Restricted(permissionName = "Customer")
    @Route(url="call/cart/save")
    public HashMap<String,Object> saveCart(VMJExchange vmjExchange){
		String email = vmjExchange.getAuthPayload().getEmail(); 
		HashMap<String, Object> body = (HashMap<String, Object>) vmjExchange.getPayload();
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		Cart cart = cartService.saveCart(email);
		return cart.toHashMap();
	}

	@Restricted(permissionName = "All")
    @Route(url="call/cart/update")
    public HashMap<String, Object> updateCart(VMJExchange vmjExchange){
		HashMap<String, Object> body = (HashMap<String, Object>) vmjExchange.getPayload(); 
		if (vmjExchange.getHttpMethod().equals("OPTIONS")){
			return null;
		}
		Cart cart = cartService.updateCart(body);
		return cart.toHashMap();
	}

	@Restricted(permissionName = "All")
    @Route(url="call/cart/detail")
    public HashMap<String, Object> getCart(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		String email = vmjExchange.getAuthPayload().getEmail();
		Cart cart = cartService.getCartByCustomerEmail(email);
		return cart.toHashMap();
	}
	
	@Route(url="call/cart/unauthorized/detail")
    public HashMap<String, Object> getCartUnauthorized(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		String cartIdStr = vmjExchange.getGETParam("cartId");
		Cart cart = cartService.getUnauthorizedCart(cartIdStr);
		return cart.toHashMap();
	}

	@Restricted(permissionName = "All")
    @Route(url="call/cart/list")
    public List<HashMap<String,Object>> getAllCart(VMJExchange vmjExchange){
		List <Cart> cartList = cartService.getAllCart();
		return cartService.transformCartListToHashMap(cartList);
	}

	@Restricted(permissionName = "All")
    @Route(url="call/cart/delete")
    public List<HashMap<String,Object>> deleteCart(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		HashMap<String, Object> body = (HashMap<String, Object>) vmjExchange.getPayload();
		String cartIdStr = (String) body.get("cartId");
    	UUID cartId = UUID.fromString(cartIdStr);
		List <Cart> cartList = cartService.deleteCart(cartId);
		return cartService.transformCartListToHashMap(cartList);
	}

	@Restricted(permissionName = "Customer")
    @Route(url="call/cartitem/save")
    public HashMap<String,Object> saveCartItem(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("POST")) {
			String email = vmjExchange.getAuthPayload().getEmail();
		    HashMap<String, Object> requestBody = (HashMap<String, Object>) vmjExchange.getPayload(); 
			CartItem result = cartItemService.saveCartItem(email, requestBody);
			return result.toHashMap();
		}
		throw new NotFoundException("Route tidak ditemukan");
	}
	
	@Route(url="call/cartitem/unauthorized/save")
    public HashMap<String,Object> saveUnauthorizedCartItem(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("POST")) {
			String cartIdStr = vmjExchange.getGETParam("cartId");
		    HashMap<String, Object> requestBody = (HashMap<String, Object>) vmjExchange.getPayload(); 
			CartItem result = cartItemService.saveUnauthorizedCartItem(cartIdStr, requestBody);
			return result.toHashMap();
		}
		throw new NotFoundException("Route tidak ditemukan");
	}

	@Restricted(permissionName = "All")
    @Route(url="call/cartitem/update")
    public HashMap<String, Object> updateCartItem(VMJExchange vmjExchange){
		HashMap<String, Object> requestBody = (HashMap<String, Object>) vmjExchange.getPayload(); 
		if (vmjExchange.getHttpMethod().equals("OPTIONS")){
			return null;
		}
		return cartItemService.updateCartItem(requestBody).toHashMap();
		
	}

	@Restricted(permissionName = "All")
    @Route(url="call/cartitem/detail")
    public HashMap<String, Object> getCartItem(VMJExchange vmjExchange){
		String cartItemIdStr = vmjExchange.getGETParam("cartItemId"); 
		UUID cartItemId = UUID.fromString(cartItemIdStr);
		CartItem cartItem = cartItemService.getCartItem(cartItemId);
		return cartItemService.toHashmapWithCatalog(cartItem);
	}

    @Restricted(permissionName = "All")
    @Route(url="call/cartitem/cart")
    public List<HashMap<String, Object>> getCartItemsByAuth(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		String email = vmjExchange.getAuthPayload().getEmail();
		List<CartItem> cartItems = cartItemService.getCartItemsByCustomerEmail(email);
		return cartItemService.transformCartItemListWithCatalogToHashMap(cartItems);
	}
    
    @Route(url="call/cartitem/unauthorized/cart")
    public List<HashMap<String, Object>> getUnauthorizedCartItems(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		String cartIdStr = vmjExchange.getGETParam("cartId");
		List<CartItem> cartItems = cartItemService.getUnauthorizedCartItems(cartIdStr);
		return cartItemService.transformCartItemListWithCatalogToHashMap(cartItems);
	}

	@Restricted(permissionName = "All")
    @Route(url="call/cartitem/list")
    public List<HashMap<String,Object>> getAllCartItem(VMJExchange vmjExchange){
		List<CartItem> cartItems = cartItemService.getAllCartItem();
		return cartItemService.transformCartItemListToHashMap(cartItems);
	}

	@Restricted(permissionName = "All")
    @Route(url="call/cartitem/delete")
    public List<HashMap<String,Object>> deleteCartItem(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		HashMap<String, Object> requestBody = (HashMap<String, Object>) vmjExchange.getPayload(); 
		String cartItemIdStr = (String) requestBody.get("cartItemId");
		UUID cartItemId = UUID.fromString(cartItemIdStr);
		List<CartItem> cartItemList = cartItemService.deleteCartItem(cartItemId);
        return cartItemService.transformCartItemListToHashMap(cartItemList);
	}

	@Restricted(permissionName = "All")
    @Route(url="call/cartitem/clear")
	public List<HashMap<String, Object>> clearCart(VMJExchange vmjExchange) {
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		HashMap<String, Object> requestBody = (HashMap<String, Object>) vmjExchange.getPayload(); 
		String cartIdStr = (String) requestBody.get("cartId");
		UUID cartId = UUID.fromString(cartIdStr);
		List<CartItem> cartItemList = cartItemService.clearCart(cartId);
        return cartItemService.transformCartItemListToHashMap(cartItemList);
	}
}
