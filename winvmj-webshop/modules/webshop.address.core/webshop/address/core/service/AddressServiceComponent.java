package webshop.address.core;
import java.util.*;

import vmj.hibernate.integrator.RepositoryUtil;
import vmj.routing.route.VMJExchange;
//add other required packages

public abstract class AddressServiceComponent implements AddressService{
	protected RepositoryUtil<Address> addressRepository;

    public AddressServiceComponent(){
        this.addressRepository = new RepositoryUtil<Address>(webshop.address.core.AddressComponent.class);
    }	

    public abstract Address saveAddress(HashMap<String, Object> requestBody, String email);
    public abstract Address updateAddress(HashMap<String, Object> requestBody);
	public abstract Address getAddress(UUID addressId);
    public abstract List<Address> getListAddress(String email);
    public abstract List<Address> deleteAddress(UUID addressId);
    public abstract List<HashMap<String,Object>> transformAddressListToHashMap(List<Address> addressList);

}
