package webshop.address.core;
import java.util.*;

import vmj.routing.route.VMJExchange;

public interface AddressService {
	Address saveAddress(HashMap<String, Object> requestBody, String email);
	Address updateAddress(HashMap<String, Object> requestBody);
	Address getAddress(UUID addressId);
    List<Address> getListAddress(String email);
    List<Address> deleteAddress(UUID addressId);
	List<HashMap<String, Object>> transformAddressListToHashMap(List<Address> addressList);
}