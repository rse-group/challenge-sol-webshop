package webshop.shipping.selfpickup;

import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;

import webshop.shipping.core.ShippingDecorator;
import webshop.shipping.core.Shipping;
import webshop.shipping.core.ShippingComponent;

@Entity(name="shipping_selfpickup")
@Table(name="shipping_selfpickup")
public class ShippingImpl extends ShippingDecorator {

	public Date pickupTime;
	public String pickupLocation;
	public ShippingImpl() {
        super();
        this.objectName = ShippingImpl.class.getName();
    }

	 public ShippingImpl(Date pickupTime, String pickupLocation) {
	    super();
	    this.pickupTime = pickupTime;
        this.pickupLocation = pickupLocation;
	    this.objectName = ShippingImpl.class.getName();
    }

	public ShippingImpl(UUID shippingId, ShippingComponent record, Date pickupTime, String pickupLocation) {
		super(shippingId, record);
		this.pickupTime = pickupTime;
		this.pickupLocation = pickupLocation;
		this.objectName = ShippingImpl.class.getName();
	}
	
	public ShippingImpl(ShippingComponent record, Date pickupTime, String pickupLocation) {
		super(record);
		this.pickupTime = pickupTime;
		this.pickupLocation = pickupLocation;
		this.objectName = ShippingImpl.class.getName();
	}

	public Date getPickupTime() {
		return this.pickupTime;
	}

	public void setPickupTime(Date pickupTime) {
		this.pickupTime = pickupTime;
	}

	public String getPickupLocation() {
		return this.pickupLocation;
	}

	public void setPickupLocation(String pickupLocation) {
		this.pickupLocation = pickupLocation;
	}

	@Override
	public String toString() {
		return "{" +
				" id='" + getShippingId() + "'" +
				", record='" + getRecord() + "'" +
				", pickupTime='" + pickupTime + "'" +
				", pickupLocation='" + pickupLocation + "'" +
				"}";
	}
	
	public HashMap<String, Object> toHashMap() {
		HashMap<String, Object> result = record.toHashMap();
		result.put("pickupTime", pickupTime);
		result.put("pickupLocation", pickupLocation);
		return result;
	}

}
