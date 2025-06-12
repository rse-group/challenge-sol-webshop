package webshop.cart.core;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import java.util.*;
import webshop.catalog.core.Catalog;

public interface CartItem {
	public UUID getCartItemId();
	public void setCartItemId(UUID cartItemId);
	public int getQuantity();
	public void setQuantity(int quantity);
	public Cart getCart();
	public void setCart(Cart cart);
	public Catalog getCatalog();
	public void setCatalog(Catalog catalog);
	public int getSubtotal();
	public void increaseQuantity();
	public void decreaseQuantity();
	public String getStockStatus();
	HashMap<String, Object> toHashMap();
}
