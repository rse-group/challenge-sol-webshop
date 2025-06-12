package webshop.address.core;
import java.util.*;

import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import vmj.routing.route.exceptions.*;
import webshop.address.AddressFactory;
import vmj.auth.annotations.Restricted;
//add other required packages

public class AddressResourceImpl extends AddressResourceComponent{
	private AddressService addressService = new AddressServiceImpl();

	@Restricted(permissionName = "Customer")
    @Route(url="call/address/save")
    public HashMap<String,Object> saveAddress(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("POST")) {
		    HashMap<String, Object> requestBody = (HashMap<String, Object>) vmjExchange.getPayload(); 
			String email =  vmjExchange.getAuthPayload().getEmail();
			Address result = addressService.saveAddress(requestBody, email);
			return result.toHashMap();
		}
		throw new NotFoundException("Route tidak ditemukan");
	}

    @Restricted(permissionName = "Customer")
    @Route(url="call/address/update")
    public HashMap<String, Object> updateAddress(VMJExchange vmjExchange){
		HashMap<String, Object> requestBody = (HashMap<String, Object>) vmjExchange.getPayload(); 
		if (vmjExchange.getHttpMethod().equals("OPTIONS")){
			return null;
		}

		Address result = addressService.updateAddress(requestBody);
		return result.toHashMap();
	}

	@Restricted(permissionName = "All")
    @Route(url="call/address/detail")
    public HashMap<String, Object> getAddress(VMJExchange vmjExchange){
		String addressIdStr = vmjExchange.getGETParam("addressId"); 
		UUID addressId = UUID.fromString(addressIdStr);
		Address result = addressService.getAddress(addressId);
		if (result == null){
			throw new NotFoundException("Address with addressId " + addressId +" not found");
		}
		return result.toHashMap();
	}

	@Restricted(permissionName = "Customer")
    @Route(url="call/address/list-profile")
    public List<HashMap<String,Object>> getListAddress(VMJExchange vmjExchange){
		String email =  vmjExchange.getAuthPayload().getEmail();
		List<Address> result = addressService.getListAddress(email);
		return addressService.transformAddressListToHashMap(result);
	}

    
	@Restricted(permissionName = "Customer")
    @Route(url="call/address/delete")
    public List<HashMap<String,Object>> deleteAddress(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		HashMap<String, Object> requestBody = (HashMap<String, Object>) vmjExchange.getPayload(); 
		UUID addressId = UUID.fromString(requestBody.get("addressId").toString());
		List<Address> result = addressService.deleteAddress(addressId);
		return addressService.transformAddressListToHashMap(result);
	}
}
