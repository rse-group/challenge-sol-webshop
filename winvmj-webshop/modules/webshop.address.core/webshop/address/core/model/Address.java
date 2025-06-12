package webshop.address.core;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import java.util.*;
import webshop.customer.core.*;

public interface Address {
	public Customer getCustomer();
	public void setCustomer(Customer customer);
	public UUID getAddressId();
	public void setAddressId(UUID addressId);
	public boolean getIsDeleted();
	public void setIsDeleted(boolean isDeleted);
	public String getProvince();
	public void setProvince(String province);
	public String getCity();
	public void setCity(String city);
	public String getDistrict();
	public void setDistrict(String district);
	public String getSubdistrict();
	public void setSubdistrict(String subdistrict);
	public int getZipcode();
	public void setZipcode(int zipcode);
	public String getStreet();
	public void setStreet(String street);
	HashMap<String, Object> toHashMap();
}
