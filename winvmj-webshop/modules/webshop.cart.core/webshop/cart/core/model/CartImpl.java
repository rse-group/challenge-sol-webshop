package webshop.cart.core;

import java.lang.Math;
import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import webshop.customer.core.Customer;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.ForeignKey;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;


@Entity(name="cart_impl")
@Table(name="cart_impl")
public class CartImpl extends CartComponent {

	public CartImpl(UUID cartId, Customer customer, int amount) {
		this.cartId = cartId;
		this.customer = customer;
		this.amount = amount;
	}

	public CartImpl(UUID cartId, Customer customer) {
		this.cartId =  UUID.randomUUID();
		this.customer = customer;
		this.amount = 0;
	}
	
	public CartImpl(UUID cartId) {
		this.cartId =  cartId;
		this.customer = null;
		this.amount = 0;
	}

	public CartImpl() { }

}
