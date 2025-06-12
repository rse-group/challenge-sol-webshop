package webshop.address.cityonly;

import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;

import webshop.address.core.AddressDecorator;
import webshop.address.core.Address;
import webshop.address.core.AddressComponent;

import webshop.customer.core.*;

@Entity(name="address_cityonly")
@Table(name="address_cityonly")
public class AddressImpl extends AddressDecorator {

	public AddressImpl(UUID addressId, Customer customer, boolean isDeleted, String city) {
		this.addressId = addressId;
		this.customer = customer;
		this.isDeleted = isDeleted;
		this.city = city;
		this.objectName = AddressImpl.class.getName();
	}

	public String getProvince() {
		throw new UnsupportedOperationException();
	}

	public void setProvince(String province) {
		throw new UnsupportedOperationException();
	}
	public int getZipcode() {
		throw new UnsupportedOperationException();
	}

	public void setZipcode(int zipcode) {
		throw new UnsupportedOperationException();
	}
	public String getStreet() {
		throw new UnsupportedOperationException();
	}

	public void setStreet(String street) {
		throw new UnsupportedOperationException();
	}
	public String getSubdistrict() {
		throw new UnsupportedOperationException();
	}

	public void setSubdistrict(String subdistrict) {
		throw new UnsupportedOperationException();
	}
	public String getDistrict() {
		throw new UnsupportedOperationException();
	}

	public void setDistrict(String district) {
		throw new UnsupportedOperationException();
	}
	
	public HashMap<String, Object> toHashMap() {
		HashMap<String, Object> addressMap = new HashMap<String,Object>();
		addressMap.put("addressId",getAddressId());
		addressMap.put("isDeleted",getIsDeleted());
		addressMap.put("customer",getCustomer());
		addressMap.put("city",getCity());
		return addressMap;
	}

}
