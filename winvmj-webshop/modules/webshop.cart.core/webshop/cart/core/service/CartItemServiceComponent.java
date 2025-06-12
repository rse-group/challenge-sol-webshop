package webshop.cart.core;
import java.util.*;

import vmj.hibernate.integrator.RepositoryUtil;
import vmj.routing.route.VMJExchange;
//add other required packages

public abstract class CartItemServiceComponent implements CartItemService{
    protected RepositoryUtil<CartItem> cartItemRepository;
    protected RepositoryUtil<Cart> cartRepository;

    public CartItemServiceComponent(){
        this.cartItemRepository = new RepositoryUtil<CartItem>(webshop.cart.core.CartItemComponent.class);
        this.cartRepository = new RepositoryUtil<Cart>(webshop.cart.core.CartComponent.class);
    }	

    public abstract CartItem saveCartItem(String email, HashMap<String, Object> requestBody);
    public abstract CartItem saveUnauthorizedCartItem(String cartIdStr, HashMap<String, Object> requestBody);
    public abstract CartItem updateCartItem(HashMap<String, Object> requestBody);
    public abstract CartItem getCartItem(UUID cartItemId);
    public abstract List<CartItem> getAllCartItem();
    public abstract List<HashMap<String,Object>> transformCartItemListToHashMap(List<CartItem> cartItemList);
    public abstract List<HashMap<String,Object>> transformCartItemListWithCatalogToHashMap(List<CartItem> cartItemList);
    public abstract List<CartItem> deleteCartItem(UUID cartItemId);
	public abstract List<CartItem> getCartItemsByCartId(UUID cartId);
	public abstract List<CartItem> getUnauthorizedCartItems(String cartIdStr);
	public abstract HashMap<String, Object> toHashmapWithCatalog(CartItem cartItem);
    public abstract List<CartItem> clearCart(UUID cartId);
    public abstract int calculateTotal(UUID cartId);
	public abstract List<CartItem> getCartItemsByCustomerEmail(String email);
}
