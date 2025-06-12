package webshop.cart.core;

import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

import javax.persistence.OneToOne;
import javax.persistence.MappedSuperclass;
import javax.persistence.CascadeType;
import webshop.customer.core.Customer;
//add other required packages

@MappedSuperclass
public abstract class CartDecorator extends CartComponent{
    @OneToOne(cascade=CascadeType.ALL)
	protected CartComponent record;

    public CartDecorator(CartComponent record) {
        this.record = record;
    }

	public CartDecorator (UUID cartId, CartComponent record) {
		this.cartId =  cartId;
		this.record = record;
	}
	
	public CartDecorator() {
		super();
		this.cartId =  UUID.randomUUID();
	}

	public CartComponent getRecord() {
		return this.record;
	}

	public UUID getCartId() {
		return this.record.getCartId();
	}

	public void setCartId(UUID cartId) {
		this.record.setCartId(cartId);
	}

	public Customer getCustomer() {
		return this.record.getCustomer();
	}

	public void setCustomer(Customer customer) {
		this.record.setCustomer(customer);
	}

	public int getAmount() { 
		return this.record.getAmount();
	}

    public void setAmount(int amount) { 
		this.record.setAmount(amount); 
	}

	public HashMap<String, Object> toHashMap() {
        return this.record.toHashMap();
    }

}
