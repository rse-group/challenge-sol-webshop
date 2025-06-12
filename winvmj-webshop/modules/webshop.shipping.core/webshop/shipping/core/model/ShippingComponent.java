package webshop.shipping.core;

import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.persistence.OneToOne;

import webshop.order.core.*;

@Entity(name="shipping_comp")
@Table(name="shipping_comp")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class ShippingComponent implements Shipping{
	@Id
	public UUID shippingId;
	public String courier;
	public String service;
	public String type;
	public int weight;
	public int shippingCost;
	public String estimation;
	public String airwayBill;
	public String status;
	@OneToOne(targetEntity=webshop.order.core.OrderComponent.class)
	public Order order;
	protected String objectName = ShippingComponent.class.getName();

	public ShippingComponent() {

	} 

	public ShippingComponent(
        UUID shippingId, String courier, String service, String type, int weight, int shippingCost, String estimation, String airwayBill, String status, Order order
    ) {
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

	public UUID getShippingId(){
		return this.shippingId;
	}
	public void setShippingId(UUID shippingId){
		this.shippingId = shippingId;
	}
	
	public String getCourier(){
		return this.courier;
	}
	public void setCourier(String courier){
		this.courier = courier;
	}
	
	public String getService(){
		return this.service;
	}
	public void setService(String service){
		this.service = service;
	}
	
	public String getType(){
		return this.type;
	}
	public void setType(String type){
		this.type = type;
	}
	
	public int getWeight(){
		return this.weight;
	}
	public void setWeight(int weight){
		this.weight = weight;
	}
	
	public int getShippingCost(){
		return this.shippingCost;
	}
	public void setShippingCost(int shippingCost){
		this.shippingCost = shippingCost;
	}
	
	public String getEstimation(){
		return this.estimation;
	}
	public void setEstimation(String estimation){
		this.estimation = estimation;
	}
	
	public String getAirwayBill(){
		return this.airwayBill;
	}
	public void setAirwayBill(String airwayBill){
		this.airwayBill = airwayBill;
	}
	
	public String getStatus(){
		return this.status;
	}
	public void setStatus(String status){
		this.status = status;
	}

	public Order getOrder(){
		return this.order;
	}
	public void setOrder(Order order){
		this.order = order;
	}

	@Override
    public String toString() {
        return "{" +
            " shippingId='" + getShippingId() + "'" +
            " courier='" + getCourier() + "'" +
            " service='" + getService() + "'" +
            " type='" + getType() + "'" +
            " weight='" + getWeight() + "'" +
            " shippingCost='" + getShippingCost() + "'" +
            " estimation='" + getEstimation() + "'" +
            " airwayBill='" + getAirwayBill() + "'" +
            " status='" + getStatus() + "'" +
            "}";
    }
	
}
