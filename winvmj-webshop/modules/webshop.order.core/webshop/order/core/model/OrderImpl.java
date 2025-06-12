package webshop.order.core;

import java.util.*;
import java.lang.Math;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.ForeignKey;
import javax.persistence.Id;
import webshop.customer.core.*;
import webshop.address.core.*;

@Entity(name="order_impl")
@Table(name="order_impl")
public class OrderImpl extends OrderComponent {
	public OrderImpl(
			String status, UUID orderId, Date date, int amount, Address address, Customer customer) {
		this.status = status;
		this.orderId = orderId;
		this.date = date;
		this.amount = amount;
		this.address = address;
		this.customer = customer;
	}

	public OrderImpl(){
		this.orderId =  UUID.randomUUID();
		this.status = "Not Paid";
		this.date = new Date();
		this.amount = 0;
		this.address = new AddressImpl();
		this.customer = null;
	}
	
	public OrderImpl(Address address){
		this.orderId =  UUID.randomUUID();
		this.status = "Not Paid";
		this.date = new Date();
		this.amount = 0;
		this.address = address;
		this.customer = null;
	}

}
