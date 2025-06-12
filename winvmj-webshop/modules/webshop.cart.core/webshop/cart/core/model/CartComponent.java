package webshop.cart.core;

import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import webshop.customer.core.Customer;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.persistence.ManyToOne;

@Entity(name="cart_comp")
@Table(name="cart_comp")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class CartComponent implements Cart{
	@Id
	public UUID cartId; 

	@ManyToOne(targetEntity=webshop.customer.core.CustomerComponent.class)
	public Customer customer;

	public int amount = 0;

	protected String objectName = CartComponent.class.getName();

	public CartComponent() {

	} 

	public CartComponent(
        UUID cartId, Customer customer, int amount
    ) {
        this.cartId = cartId;
        this.customer = customer;
		this.amount = amount;
    }

	public UUID getCartId() {
		return this.cartId;
	}
	
	public void setCartId(UUID cartId) {
		this.cartId = cartId;
	}
	
	public Customer getCustomer(){
		return this.customer;
	}

	public void setCustomer(Customer customer){
		this.customer = customer;
	}

	public int getAmount(){
		return this.amount;
	}

	public void setAmount(int amount){
		this.amount = amount;
	}

	@Override
    public String toString() {
        return "{" +
            " cartId='" + getCartId() + "'" +
            " customer='" + getCustomer() + "'" +
			" amount='" + getAmount() + "'" +
            "}";
    }

	public HashMap<String, Object> toHashMap() {
		HashMap<String, Object> cartMap = new HashMap<>();
		
		cartMap.put("cartId", getCartId());
		cartMap.put("customer", getCustomer());
		cartMap.put("amount", getAmount());
		return cartMap;
	}

	
}
