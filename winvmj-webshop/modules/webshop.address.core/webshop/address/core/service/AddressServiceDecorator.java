package webshop.address.core;
import java.util.*;

import vmj.routing.route.VMJExchange;

public abstract class AddressServiceDecorator extends AddressServiceComponent{
	protected AddressServiceComponent record;

    public AddressServiceDecorator(AddressServiceComponent record) {
        this.record = record;
    }

	public Address saveAddress(HashMap<String, Object> requestBody, String email){
		return record.saveAddress(requestBody, email);
	}

    public Address updateAddress(HashMap<String, Object> requestBody){
		return record.updateAddress(requestBody);
	}

	public Address getAddress(UUID addressId){
		return record.getAddress(addressId);
	}

	public List<Address> getListAddress(String email){
		return record.getListAddress(email);
	}

    public List<Address> deleteAddress(UUID addressId){
		return record.deleteAddress(addressId);
	}

    public List<HashMap<String,Object>> transformAddressListToHashMap(List<Address> addressList){
		return record.transformAddressListToHashMap(addressList);
	}

}
