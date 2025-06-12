package webshop.address.core;

import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.persistence.ManyToOne;
import webshop.customer.core.*;

@Entity(name="address_comp")
@Table(name = "address_comp")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class AddressComponent implements Address {
	@Id
	public UUID addressId;
	public boolean isDeleted;
	public String province;
	public String city;
	public String district;
	public String subdistrict;
	public int zipcode;
	public String street;
	@ManyToOne(targetEntity = webshop.customer.core.CustomerComponent.class)
	public Customer customer;
	protected String objectName = AddressComponent.class.getName();

	public AddressComponent() {

	}
	public AddressComponent(
			UUID addressId, boolean isDeleted, Customer customer, String province, String city, String district, String subdistrict, int zipcode, String street) {
		this.addressId = addressId;
		this.isDeleted = isDeleted;
		this.customer = customer;
		this.province = province;
		this.city = city;
		this.district = district;
		this.subdistrict = subdistrict;
		this.zipcode = zipcode;
		this.street = street;
	}
	
	public UUID getAddressId(){
		return this.addressId;
	}

	public void setAddressId(UUID addressId){
		this.addressId = addressId;
	}

	public boolean getIsDeleted(){
		return this.isDeleted;
	}

	public void setIsDeleted(boolean isDeleted){
		this.isDeleted = isDeleted;
	}

	public Customer getCustomer(){
		return this.customer;
	}

	public void setCustomer(Customer customer){
		this.customer = customer;
	}

	public String getProvince() {
		return this.province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getCity() {
		return this.city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getDistrict() {
		return this.district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getSubdistrict() {
		return this.subdistrict;
	}

	public void setSubdistrict(String subdistrict) {
		this.subdistrict = subdistrict;
	}

	public int getZipcode() {
		return this.zipcode;
	}

	public void setZipcode(int zipcode) {
		this.zipcode = zipcode;
	}

	public String getStreet() {
		return this.street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	@Override
	public String toString() {
		return "{" +
				" addressId='" + getAddressId() + "'" +
				" isDeleted='" + getIsDeleted() + "'" +
				" customer='" + getCustomer() + "'" +
				" province='" + getProvince() + "'" +
				" city='" + getCity() + "'" +
				" district='" + getDistrict() + "'" +
				" subdistrict='" + getSubdistrict() + "'" +
				" zipcode='" + getZipcode() + "'" +
				" street='" + getStreet() + "'" +
				"}";
	}

}
