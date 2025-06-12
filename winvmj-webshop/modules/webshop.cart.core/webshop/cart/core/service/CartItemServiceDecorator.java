package webshop.cart.core;
import java.util.*;

import vmj.routing.route.VMJExchange;

public abstract class CartItemServiceDecorator extends CartItemServiceComponent {
    protected CartItemServiceComponent record;

    public CartItemServiceDecorator(CartItemServiceComponent record) {
        this.record = record;
    }

    @Override
    public CartItem saveCartItem(String email, HashMap<String, Object> requestBody) {
        return record.saveCartItem(email, requestBody);
    }
    
    @Override
    public CartItem saveUnauthorizedCartItem(String cartIdStr, HashMap<String, Object> requestBody) {
        return record.saveUnauthorizedCartItem(cartIdStr, requestBody);
    }

    @Override
    public CartItem updateCartItem(HashMap<String, Object> requestBody) {
        return record.updateCartItem(requestBody);
    }

    @Override
    public CartItem getCartItem(UUID cartItemId) {
        return record.getCartItem(cartItemId);
    }

    @Override
    public List<CartItem> getAllCartItem() {
        return record.getAllCartItem();
    }

    @Override
    public List<HashMap<String, Object>> transformCartItemListToHashMap(List<CartItem> cartItemList) {
        return record.transformCartItemListToHashMap(cartItemList);
    }

    @Override
    public List<HashMap<String, Object>> transformCartItemListWithCatalogToHashMap(List<CartItem> cartItemList) {
        return record.transformCartItemListToHashMap(cartItemList);
    }

    @Override
    public List<CartItem> deleteCartItem(UUID cartItemId) {
        return record.deleteCartItem(cartItemId);
    }

    @Override
    public List<CartItem> getCartItemsByCartId(UUID cartId) {
        return record.getCartItemsByCartId(cartId);
    }
    
    @Override
    public List<CartItem> getUnauthorizedCartItems(String cartIdStr) {
        return record.getUnauthorizedCartItems(cartIdStr);
    }

    @Override
    public HashMap<String, Object> toHashmapWithCatalog(CartItem cartItem) {
        return record.toHashmapWithCatalog(cartItem);
    }

    public List<CartItem> clearCart(UUID cartId) {
        return record.clearCart(cartId);
    }

	public int calculateTotal(UUID cartId) {
		return record.calculateTotal(cartId);
	}

	public List<CartItem> getCartItemsByCustomerEmail(String email) {
		return record.getCartItemsByCustomerEmail(email);
	}
}
