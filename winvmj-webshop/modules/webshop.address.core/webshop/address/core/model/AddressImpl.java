package webshop.address.core;

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
import webshop.customer.core.*;

@Entity(name="address_impl")
@Table(name="address_impl")
public class AddressImpl extends AddressComponent {

	public AddressImpl(UUID addressId, Customer customer, String province, String city, String district, String subdistrict, int zipcode, String street) {
		this.addressId = addressId;
		this.isDeleted = false;
		this.customer = customer;
		this.province = province;
		this.city = city;
		this.district = district;
		this.subdistrict = subdistrict;
		this.zipcode = zipcode;
		this.street = street;
	}

	public AddressImpl(UUID addressId, Customer customer, String city) {
		this.addressId = addressId;
		this.isDeleted = false;
		this.customer = customer;
		this.city = city;
	}

	public AddressImpl(Customer customer, String province, String city, String district, String subdistrict, int zipcode, String street) {
		this.addressId = UUID.randomUUID();
		this.isDeleted = false;
		this.customer = customer;
		this.province = province;
		this.city = city;
		this.district = district;
		this.subdistrict = subdistrict;
		this.zipcode = zipcode;
		this.street = street;
	}

	public AddressImpl() { }

	public HashMap<String, Object> toHashMap() {
        HashMap<String, Object> addressMap = new HashMap<String,Object>();
		if (getAddressId() != null) {
			addressMap.put("addressId",getAddressId());
		}
		addressMap.put("isDeleted",getIsDeleted());
		addressMap.put("customer",getCustomer());
		addressMap.put("province", getProvince());
		addressMap.put("city", getCity());
		addressMap.put("district", getDistrict());
		addressMap.put("subdistrict", getSubdistrict());
		addressMap.put("zipcode", getZipcode());
		addressMap.put("street", getStreet());

        return addressMap;
    }

}
