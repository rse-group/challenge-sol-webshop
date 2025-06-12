package webshop.shipping.core;

import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

import javax.persistence.OneToOne;
import javax.persistence.MappedSuperclass;
import javax.persistence.CascadeType;
//add other required packages
import webshop.order.core.*;

@MappedSuperclass
public abstract class ShippingDecorator extends ShippingComponent{
    @OneToOne(cascade=CascadeType.ALL)
	protected ShippingComponent record;

	public ShippingDecorator () {
		super();
		this.record = record;
		this.shippingId =  UUID.randomUUID();
	}
		
	public ShippingDecorator (ShippingComponent record) {
		this.shippingId =  UUID.randomUUID();
		this.record = record;
	}

	public ShippingDecorator (UUID shippingId, ShippingComponent record) {
		this.shippingId =  shippingId;
		this.record = record;
	}
	
	public ShippingDecorator (ShippingComponent record, String objectName) {
		this.shippingId =  UUID.randomUUID();
		this.record = record;	
		this.objectName=objectName;
	}

	public HashMap<String, Object> toHashMap() {
        return this.record.toHashMap();
    }

	public ShippingComponent getRecord() {
		return this.record;
	}

	public void setRecord(ShippingComponent record) {
		this.record = record;
	}

	public UUID getShippingId() {
		return this.shippingId;
	}
	
	public void setShippingId(UUID shippingId) {
		this.shippingId = shippingId;
	}

	public String getCourier() {
		return this.record.getCourier();
	}

	public void setCourier(String courier) {
		this.record.setCourier(courier);
	}

	public String getService() {
		return this.record.getService();
	}

	public void setService(String service) {
		this.record.setService(service);
	}

	public String getType() {
		return this.record.getType();
	}

	public void setType(String type) {
		this.record.setType(type);
	}

	public int getWeight() {
		return this.record.getWeight();
	}

	public void setWeight(int weight) {
		this.record.setWeight(weight);
	}

	public int getShippingCost() {
		return this.record.getShippingCost();
	}

	public void setShippingCost(int shippingCost) {
		this.record.setShippingCost(shippingCost);
	}

	public String getEstimation() {
		return this.record.getEstimation();
	}

	public void setEstimation(String estimation) {
		this.record.setEstimation(estimation);
	}

	public String getAirwayBill() {
		return this.record.getAirwayBill();
	}

	public void setAirwayBill(String airwayBill) {
		this.record.setAirwayBill(airwayBill);
	}

	public String getStatus() {
		return this.record.getStatus();
	}

	public void setStatus(String status) {
		this.record.setStatus(status);
	}

	public Order getOrder() {
		return this.record.getOrder();
	}

	public void setOrder(Order order) {
		this.record.setOrder(order);
	}
}
