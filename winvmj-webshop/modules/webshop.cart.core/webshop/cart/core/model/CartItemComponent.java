package webshop.cart.core;

import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import webshop.cart.core.*;
import webshop.catalog.core.*;
import javax.persistence.ManyToOne;

@Entity(name="cartitem_comp")
@Table(name="cartitem_comp")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class CartItemComponent implements CartItem{
	@Id
	public UUID cartItemId; 
	public int quantity;
	@ManyToOne(targetEntity=webshop.cart.core.CartComponent.class)
	public Cart cart;
	@ManyToOne(targetEntity=webshop.catalog.core.CatalogComponent.class)
	public Catalog catalog;
	protected String objectName = CartItemComponent.class.getName();

	public CartItemComponent() {

	} 

	public CartItemComponent(
        UUID cartItemId, int quantity, Cart cart, Catalog catalog
    ) {
        this.cartItemId = cartItemId;
        this.quantity = quantity;
        this.cart = cart;
        this.catalog = catalog;
    }

	public UUID getCartItemId() {
		return this.cartItemId;
	};
	public void setCartItemId(UUID cartItemId) {
		this.cartItemId = cartItemId;
	};
	
	public int getQuantity(){
		return this.quantity;
	};
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public Cart getCart() {
		return this.cart;
	}
	public void setCart(Cart cart) {
		this.cart = cart;
	}
	
	public Catalog getCatalog(){
		return this.catalog;
	};
	public void setCatalog(Catalog catalog) {
		this.catalog = catalog;
	}
 
	public abstract int getSubtotal();

	public abstract void increaseQuantity();

	public abstract void decreaseQuantity();

	public abstract String getStockStatus();

	@Override
    public String toString() {
        return "{" +
            " cartItemId='" + getCartItemId() + "'" +
            " quantity='" + getQuantity() + "'" +
            " cart='" + getCart() + "'" +
            " catalog='" + getCatalog() + "'" +
            "}";
    }
	
}
