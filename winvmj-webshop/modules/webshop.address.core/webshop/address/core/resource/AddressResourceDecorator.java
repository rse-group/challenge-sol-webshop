package webshop.address.core;
import java.util.*;

import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

public abstract class AddressResourceDecorator extends AddressResourceComponent{
	protected AddressResourceComponent record;

    public AddressResourceDecorator(AddressResourceComponent record) {
        this.record = record;
    }

    public HashMap<String,Object> saveAddress(VMJExchange vmjExchange){
		return record.saveAddress(vmjExchange);
	}

    public HashMap<String,Object> updateAddress(VMJExchange vmjExchange){
		return record.updateAddress(vmjExchange);
	}

    public HashMap<String,Object> getAddress(VMJExchange vmjExchange){
		return record.getAddress(vmjExchange);
	}

    public List<HashMap<String,Object>> getListAddress(VMJExchange vmjExchange){
		return record.getListAddress(vmjExchange);
	}

    public List<HashMap<String,Object>> deleteAddress(VMJExchange vmjExchange){
		return record.deleteAddress(vmjExchange);
	}

}
