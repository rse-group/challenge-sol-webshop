package webshop.order.core;

import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.persistence.ManyToOne;
import webshop.order.core.*;
import webshop.catalog.core.*;

@Entity(name="orderitem_comp")
@Table(name="orderitem_comp")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class OrderItemComponent implements OrderItem{ 
	@Id
	public UUID orderItemId;
	public int quantity;
	@ManyToOne(targetEntity=webshop.order.core.OrderComponent.class)
	public Order order;
	@ManyToOne(targetEntity=webshop.catalog.core.CatalogComponent.class)
	public Catalog catalog;
	protected String objectName = OrderItemComponent.class.getName();

	public OrderItemComponent() {

	} 

	public OrderItemComponent(
        UUID orderItemId, int quantity, Order order, Catalog catalog
    ) {
        this.orderItemId = orderItemId;
        this.quantity = quantity;
        this.order = order;
        this.catalog = catalog;
    }

	public UUID getOrderItemId(){
		return this.orderItemId;
	}
	public void setOrderItemId(UUID orderItemId){
		this.orderItemId = orderItemId;
	}
	
	public int getQuantity(){
		return this.quantity;
	}
	public void setQuantity(int quantity){
		this.quantity = quantity;
	}
	
	public Order getOrder(){
		return this.order;
	}
	public void setOrder(Order order){
		this.order = order;
	}
	
	public Catalog getCatalog(){
		return this.catalog;
	}
	public void setCatalog(Catalog catalog){
		this.catalog = catalog;
	}

	public int getSubtotal(){
		return this.quantity * this.catalog.getPrice();
	}

	@Override
    public String toString() {
        return "{" +
            " orderItemId='" + getOrderItemId() + "'" +
            " quantity='" + getQuantity() + "'" +
            " order='" + getOrder() + "'" +
            " catalog='" + getCatalog() + "'" +
            "}";
    }
	
}
