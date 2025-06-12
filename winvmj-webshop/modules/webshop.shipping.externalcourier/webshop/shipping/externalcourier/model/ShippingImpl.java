package webshop.shipping.externalcourier;

import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;

import webshop.shipping.core.ShippingDecorator;
import webshop.shipping.core.Shipping;
import webshop.shipping.core.ShippingComponent;

@Entity(name="shipping_externalcourier")
@Table(name="shipping_externalcourier")
public class ShippingImpl extends ShippingDecorator {

	public ShippingImpl() {
        super();
        this.objectName = ShippingImpl.class.getName();
    }

	
	public ShippingImpl(ShippingComponent record) {
		super(record);
		this.objectName = ShippingImpl.class.getName();
	}



}
