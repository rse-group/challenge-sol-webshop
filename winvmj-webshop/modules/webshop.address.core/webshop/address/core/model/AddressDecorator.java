package webshop.address.core;

import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

import javax.persistence.OneToOne;
import javax.persistence.MappedSuperclass;
import javax.persistence.CascadeType;

import webshop.customer.core.*;
//add other required packages

@MappedSuperclass
public abstract class AddressDecorator extends AddressComponent {
	@OneToOne(cascade = CascadeType.ALL)
	protected AddressComponent record;

	public AddressDecorator() {
		super();
		this.record = record;
		this.addressId = UUID.randomUUID();
	}

	public AddressDecorator(AddressComponent record) {
		this.addressId = UUID.randomUUID();
		this.record = record;
	}

	public AddressDecorator(UUID addressId, AddressComponent record) {
		this.addressId = addressId;
		this.record = record;
	}

	public AddressDecorator(AddressComponent record, String objectName) {
		this.addressId = UUID.randomUUID();
		this.record = record;
		this.objectName = objectName;
	}

	public HashMap<String, Object> toHashMap() {
		return this.record.toHashMap();
	}

	public AddressComponent getRecord() {
		return this.record;
	}

	public void setRecord(AddressComponent record) {
		this.record = record;
	}

	public UUID getAddressId() {
		return this.addressId;
	}

	public void setAddressId(UUID addressId) {
		this.addressId = addressId;
	}

	public boolean getIsDeleted() {
		return this.record.isDeleted;
	}

	public void setIsDeleted(boolean isDeleted) {
		this.record.isDeleted = isDeleted;
	}

	public Customer getCustomer() {
		return this.record.customer;
	}
	
	public void setCustomer(Customer customer) {
		this.record.customer = customer;
	}

	public String getProvince() {
		return this.record.province;
	}

	public void setProvince(String province) {
		this.record.province = province;
	}

	public String getCity() {
		return this.record.city;
	}

	public void setCity(String city) {
		this.record.city = city;
	}

	public String getDistrict() {
		return this.record.district;
	}

	public void setDistrict(String district) {
		this.record.district = district;
	}

	public String getSubdistrict() {
		return this.record.subdistrict;
	}

	public void setSubdistrict(String subdistrict) {
		this.record.subdistrict = subdistrict;
	}

	public int getZipcode() {
		return this.record.zipcode;
	}

	public void setZipcode(int zipcode) {
		this.record.zipcode = zipcode;
	}

	public String getStreet() {
		return this.record.street;
	}

	public void setStreet(String street) {
		this.record.street = street;
	}
}
