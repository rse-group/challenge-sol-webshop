package webshop.shipping.core;

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
import webshop.order.core.*;

@Entity(name="shipping_impl")
@Table(name="shipping_impl")
public class ShippingImpl extends ShippingComponent {

	public ShippingImpl(UUID shippingId, String courier, String service, String type, int weight, int shippingCost, String estimation, String airwayBill, String status, Order order) {
		this.shippingId = shippingId;
		this.courier = courier;
		this.service = service;
		this.type = type;
		this.weight = weight;
		this.shippingCost = shippingCost;
		this.estimation = estimation;
		this.airwayBill = airwayBill;
		this.status = status;
		this.order = order;
	}

	public ShippingImpl(String courier, String service, String type, int weight, int shippingCost, String estimation, String airwayBill, String status, Order order) {
		this.shippingId =  UUID.randomUUID();
		this.courier = courier;
		this.service = service;
		this.type = type;
		this.weight = weight;
		this.shippingCost = shippingCost;
		this.estimation = estimation;
		this.airwayBill = airwayBill;
		this.status = status;
		this.order = order;
	}

	public ShippingImpl() { }

	public HashMap<String, Object> toHashMap() {
        HashMap<String, Object> shippingMap = new HashMap<String,Object>();
		shippingMap.put("shippingId",getShippingId());
		shippingMap.put("courier",getCourier());
		shippingMap.put("service",getService());
		shippingMap.put("type",getType());
		shippingMap.put("weight",getWeight());
		shippingMap.put("shippingCost",getShippingCost());
		shippingMap.put("estimation",getEstimation());
		shippingMap.put("airwayBill",getAirwayBill());
		shippingMap.put("status",getStatus());
		shippingMap.put("orderId",getOrder().getOrderId());
        return shippingMap;
    }

}
