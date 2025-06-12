package webshop.order.core;

import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

import javax.persistence.OneToOne;
import javax.persistence.MappedSuperclass;
import javax.persistence.CascadeType;
//add other required packages

@MappedSuperclass
public abstract class OrderItemDecorator extends OrderItemComponent{
    @OneToOne(cascade=CascadeType.ALL)
	protected OrderItemComponent record;

	public OrderItemDecorator () {
		super();
		this.record = record;
		this.orderItemId =  orderItemId.randomUUID();
	}
		
	public OrderItemDecorator (OrderItemComponent record) {
		this.orderItemId =  orderItemId.randomUUID();
		this.record = record;
	}

	public OrderItemDecorator (UUID orderItemId, OrderItemComponent record) {
		this.orderItemId =  orderItemId;
		this.record = record;
	}
	
	public OrderItemDecorator (OrderItemComponent record, String objectName) {
		this.orderItemId =  orderItemId.randomUUID();
		this.record = record;	
		this.objectName=objectName;
	}

	public OrderItemComponent getRecord() {
		return this.record;
	}

	public int getSubtotal() {
        return record.getSubtotal();
    }

	public HashMap<String, Object> toHashMap() {
        return this.record.toHashMap();
    }

}
