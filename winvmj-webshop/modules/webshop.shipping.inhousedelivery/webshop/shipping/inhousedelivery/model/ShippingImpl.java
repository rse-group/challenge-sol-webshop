package webshop.shipping.inhousedelivery;

import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;

import webshop.shipping.core.ShippingDecorator;
import webshop.shipping.core.Shipping;
import webshop.shipping.core.ShippingComponent;

@Entity(name="shipping_inhousedelivery")
@Table(name="shipping_inhousedelivery")
public class ShippingImpl extends ShippingDecorator {

	public Date scheduledTime;
	public String courierContact;
	public ShippingImpl() {
        super();
        this.objectName = ShippingImpl.class.getName();
    }

	public ShippingImpl(Date scheduledTime, String courierContact) {
	    super();
        this.scheduledTime = scheduledTime;
	    this.courierContact = courierContact;
	    this.objectName = ShippingImpl.class.getName();
    }
	
	public ShippingImpl(UUID shippingId, ShippingComponent record, Date scheduledTime, String courierContact) {
		super(shippingId, record);
		this.scheduledTime = scheduledTime;
		this.courierContact = courierContact;
		this.objectName = ShippingImpl.class.getName();
	}

	public ShippingImpl(ShippingComponent record, Date scheduledTime, String courierContact) {
		super(record);
		this.scheduledTime = scheduledTime;
		this.courierContact = courierContact;
		this.objectName = ShippingImpl.class.getName();
	}

	public Date getScheduledTime() {
		return this.scheduledTime;
	}

	public void setScheduledTime(Date scheduledTime) {
		this.scheduledTime = scheduledTime;
	}

	public String getCourierContact() {
		return this.courierContact;
	}

	public void setCourierContact(String courierContact) {
		this.courierContact = courierContact;
	}

	@Override
	public String toString() {
		return "{" +
				" id='" + getShippingId() + "'" +
				", record='" + getRecord() + "'" +
				", scheduledTime='" + scheduledTime + "'" +
				", courierContact='" + courierContact + "'" +
				"}";
	}
	
	public HashMap<String, Object> toHashMap() {
		HashMap<String, Object> result = record.toHashMap();
		result.put("scheduledTime", scheduledTime);
		result.put("courierContact", courierContact);
		return result;
	}

}
