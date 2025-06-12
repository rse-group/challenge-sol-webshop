package webshop.address.cityonly;
import java.util.*;

import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import vmj.routing.route.exceptions.*;
import vmj.auth.annotations.Restricted;

import webshop.address.core.*;

public class AddressResourceImpl extends AddressResourceDecorator {
    private AddressService addressService;
    public AddressResourceImpl (AddressResourceComponent recordController, AddressServiceComponent recordService) {
        super(recordController);
        this.addressService = new AddressServiceImpl(recordService);
    }

	@Restricted(permissionName = "Customer")
    @Route(url="call/cityonly/save")
    public HashMap<String, Object> saveAddress(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		HashMap<String, Object> requestBody = (HashMap<String, Object>) vmjExchange.getPayload();
		String email =  vmjExchange.getAuthPayload().getEmail();
		Address result = addressService.saveAddress(requestBody, email);
		return result.toHashMap();
	}

	@Restricted(permissionName = "Customer")
    @Route(url="call/cityonly/update")
    public HashMap<String, Object> updateAddress(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		HashMap<String, Object> requestBody = (HashMap<String, Object>) vmjExchange.getPayload();
		Address result = addressService.updateAddress(requestBody);
		return result.toHashMap();
	}

	@Restricted(permissionName = "All")
    @Route(url="call/cityonly/detail")
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
    @Route(url="call/cityonly/list-profile")
    public List<HashMap<String,Object>> getListAddress(VMJExchange vmjExchange){
		String email =  vmjExchange.getAuthPayload().getEmail();
		List<Address> result = addressService.getListAddress(email);
		return addressService.transformAddressListToHashMap(result);
	}
	
	@Restricted(permissionName = "Customer")
    @Route(url="call/cityonly/delete")
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
