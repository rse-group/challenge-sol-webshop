package webshop.order.core;

import webshop.customer.core.*;
import webshop.address.core.*;
import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.persistence.ManyToOne;

@Entity(name="order_comp")
@Table(name="order_comp")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class OrderComponent implements Order{
	@Id
	public UUID orderId; 
	public String status;
	public Date date;
	public int amount;
	@ManyToOne(targetEntity=webshop.address.core.AddressComponent.class)
	public Address address;
	@ManyToOne(targetEntity=webshop.customer.core.CustomerComponent.class)
	public Customer customer;
	protected String objectName = OrderImpl.class.getName();

	public OrderComponent() {

	} 
	public UUID getOrderId(){ return this.orderId; }
	public void setOrderId(UUID orderId){ this.orderId = orderId; }
	
	public String getStatus(){ return this.status; }
	public void setStatus(String status){ this.status = status; }

	public Date getDate(){ return this.date; }
	public void setDate(Date date){ this.date = date; }
	
	public int getAmount(){ return this.amount; }
	public void setAmount(int amount){ this.amount = amount; }

	public Address getAddress(){ return this.address; }
	public void setAddress(Address address){ this.address = address; }

	public Customer getCustomer() { return this.customer; }
    public void setCustomer(Customer customer) { this.customer = customer; }

	@Override
    public String toString() {
        return "{" +
            " status='" + getStatus() + "'" +
            " orderId='" + getOrderId() + "'" +
            " date='" + getDate() + "'" +
            " amount='" + getAmount() + "'" +
            " address='" + getAddress() + "'" +
            " customer='" + getCustomer() + "'" +
            "}";
    }
	
    public HashMap<String, Object> toHashMap() {
    	System.out.println("orderId:" + getOrderId());
        HashMap<String, Object> orderMap = new HashMap<String,Object>();
		orderMap.put("orderId",getOrderId());
		orderMap.put("status",getStatus());
		orderMap.put("date",getDate());
		orderMap.put("amount",getAmount());
		if (getAddress() != null && getAddress().getAddressId() != null) {
			orderMap.put("addressId", getAddress().getAddressId());
		}
		if (getCustomer() != null) {
			orderMap.put("customer",getCustomer().toHashMap());
		}
        return orderMap;
    }
}
