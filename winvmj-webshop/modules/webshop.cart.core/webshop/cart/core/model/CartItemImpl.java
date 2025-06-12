package webshop.cart.core;

import java.lang.Math;
import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import webshop.catalog.core.*;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.ForeignKey;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;


@Entity(name="cartitem_impl")
@Table(name="cartitem_impl")
public class CartItemImpl extends CartItemComponent {

	public CartItemImpl(UUID cartItemId, int quantity, Cart cart, Catalog catalog) {
		this.cartItemId = cartItemId;
		this.quantity = quantity;
		this.cart = cart;
		this.catalog = catalog;
	}

	public CartItemImpl(int quantity, Cart cart, Catalog catalog) {
		this.cartItemId = UUID.randomUUID();
		this.quantity = quantity;
		this.cart = cart;
		this.catalog = catalog;
	}

	public CartItemImpl() { }

	public int getSubtotal() {
        return this.quantity * this.catalog.getPrice();
    }

	public void increaseQuantity() {
		this.quantity++;
	}

	public void decreaseQuantity() {
		if (this.quantity > 1) {
            this.quantity--;
        }
	}

	public String getStockStatus() {
		int currentQuantity = this.quantity;
		int availableStock = this.catalog.getAvailableStock();
		String message = "";
		if (currentQuantity > availableStock) {
			message = "Insufficient stock. Available stock: " + availableStock;
		}
		if (availableStock == 0) {
			message = "Out of stock";
		}
		return message;
	}
	
	public HashMap<String, Object> toHashMap() {
        HashMap<String, Object> cartitemMap = new HashMap<String,Object>();
		cartitemMap.put("cartItemId",getCartItemId());
		cartitemMap.put("quantity",getQuantity());
		cartitemMap.put("cart",getCart());
		cartitemMap.put("catalog",getCatalog());
		cartitemMap.put("stockStatus",getStockStatus());

        return cartitemMap;
    }

}
