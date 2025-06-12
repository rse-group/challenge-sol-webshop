package webshop.cart.core;
import java.util.*;

import vmj.routing.route.VMJExchange;

public interface CartItemService {
	CartItem saveCartItem(String email, HashMap<String, Object> requestBody);
	CartItem saveUnauthorizedCartItem(String cartIdStr, HashMap<String, Object> requestBody);
	CartItem getCartItem(UUID cartItemId);
	CartItem updateCartItem(HashMap<String, Object> requestBody);
    List<CartItem> getAllCartItem();
	List<CartItem> deleteCartItem(UUID cartItemId);
	List<HashMap<String, Object>> transformCartItemListToHashMap(List<CartItem> list);
	List<HashMap<String, Object>> transformCartItemListWithCatalogToHashMap(List<CartItem> list);
    HashMap<String, Object> toHashmapWithCatalog(CartItem cartItem);
    List<CartItem> getCartItemsByCartId(UUID cartId);
    List<CartItem> getUnauthorizedCartItems(String cartIdStr);
    List<CartItem> clearCart(UUID cartId);
    int calculateTotal(UUID cartId);
	List<CartItem> getCartItemsByCustomerEmail(String email);
}
