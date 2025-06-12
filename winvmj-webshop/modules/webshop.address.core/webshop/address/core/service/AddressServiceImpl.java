package webshop.address.core;
import java.util.*;
import com.google.gson.Gson;
import java.util.logging.Logger;
import java.io.File;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import vmj.routing.route.exceptions.*;
import webshop.address.AddressFactory;
import webshop.customer.core.*;
//add other required packages

public class AddressServiceImpl extends AddressServiceComponent{
	private AddressFactory addressFactory = new AddressFactory();
	CustomerService customerService = new CustomerServiceImpl();
	
    public Address saveAddress(HashMap<String, Object> requestBody, String email){
		if (!requestBody.containsKey("province")){
			throw new FieldValidationException("Field 'province' not found in the request body.");
        }
        String province = (String) requestBody.get("province");
		if (!requestBody.containsKey("city")){
			throw new FieldValidationException("Field 'city' not found in the request body.");
		}
        String city = (String) requestBody.get("city");
        if (!requestBody.containsKey("district")){
			throw new FieldValidationException("Field 'district' not found in the request body.");
        }
        String district = (String) requestBody.get("district");
        if (!requestBody.containsKey("subdistrict")){
            throw new FieldValidationException("Field 'subdistrict' not found in the request body.");
        }
        String subdistrict = (String) requestBody.get("subdistrict");
        if (!requestBody.containsKey("zipcode")){
            throw new FieldValidationException("Field 'zipcode' not found in the request body.");
        }
        String zipcodeStr = (String) requestBody.get("zipcode");
        int zipcode = Integer.parseInt(zipcodeStr);
		if (!requestBody.containsKey("street")){
			throw new FieldValidationException("Field 'street' not found in the request body.");
		}
		String street = (String) requestBody.get("street");
		
		Customer customer = null;
		if (email != null){
			customer = customerService.getCustomerByEmail(email);
		}

		UUID addressId = UUID.randomUUID();
		Address address = AddressFactory.createAddress(
			"webshop.address.core.AddressImpl",
			addressId,
			customer,
			province,
			city,
			district,
			subdistrict,
			zipcode,
			street
		);

		addressRepository.saveObject(address);
		return address;
	}

    public Address updateAddress(HashMap<String, Object> requestBody){
		if (!requestBody.containsKey("addressId")){
			throw new FieldValidationException("Field 'addressId' not found in the request body.");
		}
		String addressIdStr = (String) requestBody.get("addressId");
		UUID addressId = UUID.fromString(addressIdStr);
		
		Address address = addressRepository.getObject(addressId);
		if (address == null){
			throw new NotFoundException("Address with addressId " + addressId +" not found");
		}

		String province = (String) requestBody.get("province");
		String city = (String) requestBody.get("city");
		String district = (String) requestBody.get("district");
		String subdistrict = (String) requestBody.get("subdistrict");
		String street = (String) requestBody.get("street");
		int zipcode = Integer.parseInt((String) requestBody.get("zipcode"));

		address.setProvince(province);
        address.setCity(city);
        address.setDistrict(district);
        address.setSubdistrict(subdistrict);
        address.setStreet(street);
        address.setZipcode(zipcode);

		addressRepository.updateObject(address);
		return address;
	}

	public Address getAddress(UUID addressId){
		Address address = addressRepository.getObject(addressId);
		if (address == null || address.getIsDeleted()){
			throw new NotFoundException("Address with addressId " + addressId +" not found");
		}
		return address;
	}

    public List<Address> getListAddress(String email){
		Customer customer = customerService.getCustomerByEmail(email);
		UUID customerId = customer.getCustomerId();
		List<Address> list = addressRepository.getListObject("address_comp", "customer_customerid", customerId);
		list.removeIf(Address::getIsDeleted); 
		return list;
	}

    public List<HashMap<String,Object>> transformAddressListToHashMap(List<Address> addressList){
		List<HashMap<String,Object>> resultList = new ArrayList<HashMap<String,Object>>();
        for(int i = 0; i < addressList.size(); i++) {
            resultList.add(addressList.get(i).toHashMap());
        }

        return resultList;
	}

    public List<Address> deleteAddress(UUID addressId){
		Address address = addressRepository.getObject(addressId);
		if (address == null){	
			throw new NotFoundException("Address with addressId " + addressId +" not found");
		}
		address.setIsDeleted(true);
		addressRepository.updateObject(address);
		return getListAddress(address.getCustomer().getEmail());
	}

}
