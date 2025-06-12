package webshop.cart.core;
import java.util.*;

import vmj.routing.route.VMJExchange;

public interface CartService {
    Cart saveCart(String email);
    Cart createUnauthorizedCart();
    Cart updateCart(HashMap<String, Object> requestBody);
	Cart getCart(UUID cartId);
	Cart getUnauthorizedCart(String cartIdStr);
    List<Cart> getAllCart();
    List<Cart> deleteCart(UUID cartId);
	Cart getCartByCustomerEmail(String email);
    List<HashMap<String, Object>> transformCartListToHashMap(List<Cart> cartList);
}
