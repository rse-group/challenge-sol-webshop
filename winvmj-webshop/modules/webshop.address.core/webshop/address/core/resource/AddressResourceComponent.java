package webshop.address.core;
import java.util.*;

import vmj.hibernate.integrator.RepositoryUtil;
import vmj.routing.route.VMJExchange;
//add other required packages

public abstract class AddressResourceComponent implements AddressResource{
	protected RepositoryUtil<Address> addressRepository;
	public AddressResourceComponent() { 
		this.addressRepository = new RepositoryUtil<Address>(webshop.address.core.AddressComponent.class);
	}
 
    public abstract HashMap<String,Object> saveAddress(VMJExchange vmjExchange);    
	public abstract HashMap<String,Object> updateAddress(VMJExchange vmjExchange);
    public abstract HashMap<String,Object> getAddress(VMJExchange vmjExchange);
    public abstract List<HashMap<String,Object>> getListAddress(VMJExchange vmjExchange);
    public abstract List<HashMap<String,Object>> deleteAddress(VMJExchange vmjExchange);

}
