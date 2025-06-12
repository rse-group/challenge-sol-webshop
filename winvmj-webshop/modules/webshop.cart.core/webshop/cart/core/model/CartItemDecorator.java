package webshop.cart.core;

import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

import javax.persistence.OneToOne;
import javax.persistence.MappedSuperclass;
import javax.persistence.CascadeType;
//add other required packages

@MappedSuperclass
public abstract class CartItemDecorator extends CartItemComponent{
    @OneToOne(cascade=CascadeType.ALL)
	protected CartItemComponent record;
	
	public CartItemDecorator (CartItemComponent record) {
		this.record = record;
	}

	public CartItemDecorator() {
		super();
		this.cartItemId = UUID.randomUUID();
	}
	
	public CartItemDecorator (UUID cartItemId, CartItemComponent record) {
		this.cartItemId = cartItemId;
		this.record = record;
	}

	public CartItemComponent getRecord() {
		return this.record;
	}

	public int getSubtotal() {
		return this.record.getSubtotal();
	}

	public void increaseQuantity() {
		this.record.increaseQuantity();
	}

	public void decreaseQuantity() {
		this.record.decreaseQuantity();
	}

	public String getStockStatus() {
		return this.record.getStockStatus();
	}

	public HashMap<String, Object> toHashMap() {
        return this.record.toHashMap();
    }

}
