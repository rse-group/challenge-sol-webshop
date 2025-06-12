package webshop.address.cityonly;

import java.util.*;

import vmj.routing.route.VMJExchange;
import vmj.routing.route.exceptions.*;
import webshop.address.AddressFactory;
import webshop.address.core.AddressDecorator;
import webshop.address.core.AddressServiceComponent;
import webshop.address.core.AddressServiceDecorator;
import webshop.address.core.AddressComponent;
import webshop.address.core.Address;
import webshop.customer.core.*;

public class AddressServiceImpl extends AddressServiceDecorator {
    private AddressFactory addressFactory = new AddressFactory();
    private CustomerService customerService = new CustomerServiceImpl();

    public AddressServiceImpl (AddressServiceComponent record) {
        super(record);
    }

    public Address saveAddress(HashMap<String, Object> requestBody, String email){
        if (!requestBody.containsKey("city")){
            throw new FieldValidationException("Field 'city' not found in the request body.");
		}
        String city = (String) requestBody.get("city");
		
		Customer customer = null;
		if (email != null){
			customer = customerService.getCustomerByEmail(email);
		}

		UUID addressId = UUID.randomUUID();
        Address addressCityOnly = AddressFactory.createAddress(
            "webshop.address.core.AddressImpl",
            addressId,
            customer,
            city
        );

		addressRepository.saveObject(addressCityOnly);
		return addressCityOnly;
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
		
        if (requestBody.containsKey("city")){
            String city = (String) requestBody.get("city");
            address.setCity(city);
        }
        
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
		List<Address> allAddress = addressRepository.getAllObject("address_comp");
        List<Address> customerAddress = new ArrayList<Address>();
        for (Address address : allAddress){
            if (address.getCustomer().getCustomerId().equals(customerId)){
                customerAddress.add(address);
            }
        }
        customerAddress.removeIf(Address::getIsDeleted);
        return customerAddress;
    }

    public List<Address> deleteAddress(UUID addressId){
		Address address = addressRepository.getObject(addressId);
		if (address == null || address.getIsDeleted()){	
			throw new NotFoundException("Address with addressId " + addressId +" not found");
		}
		address.setIsDeleted(true);
		addressRepository.updateObject(address);
		return getListAddress(address.getCustomer().getEmail());
	}
}
