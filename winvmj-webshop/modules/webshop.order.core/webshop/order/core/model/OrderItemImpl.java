package webshop.order.core;

import java.lang.Math;
import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.ForeignKey;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import webshop.catalog.core.*;
import webshop.order.core.*;

@Entity(name="orderitem_impl")
@Table(name="orderitem_impl")
public class OrderItemImpl extends OrderItemComponent {

	public OrderItemImpl(UUID orderItemId, int quantity, Order order, Catalog catalog) {
		this.orderItemId = orderItemId;
		this.quantity = quantity;
		this.order = order;
		this.catalog = catalog;
	}

	public OrderItemImpl(int quantity, Order order, Catalog catalog) {
		this.orderItemId = UUID.randomUUID();
		this.quantity = quantity;
		this.order = order;
		this.catalog = catalog;
	}

	public OrderItemImpl() { }

	public int getSubtotal() {
		return this.quantity * this.catalog.getPrice();
	}
	
	public HashMap<String, Object> toHashMap() {
        HashMap<String, Object> orderItemMap = new HashMap<String,Object>();
		orderItemMap.put("orderItemId", getOrderItemId());
		orderItemMap.put("quantity", getQuantity());
		orderItemMap.put("orderId", getOrder().getOrderId());
		if (getOrder().getAddress() != null && getOrder().getAddress().getAddressId() != null) {
			orderItemMap.put("addressId", getOrder().getAddress().getAddressId());
		}
		orderItemMap.put("catalogId", getCatalog().getCatalogId());
		orderItemMap.put("name", getCatalog().getName());
		orderItemMap.put("price", getCatalog().getPrice());
		orderItemMap.put("amount", getSubtotal());
		orderItemMap.put("pictureURL", getCatalog().getPictureURL());

        return orderItemMap;
    }

}
