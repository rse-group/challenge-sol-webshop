package webshop.shipping.core;
import java.util.*;

import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

public abstract class ShippingResourceDecorator extends ShippingResourceComponent{
	protected ShippingResourceComponent record;

    public ShippingResourceDecorator(ShippingResourceComponent record) {
        this.record = record;
    }

    public HashMap<String,Object> saveShipping(VMJExchange vmjExchange){
		return record.saveShipping(vmjExchange);
	}

    public HashMap<String, Object> getShippingByOrderId(VMJExchange vmjExchange){
		return record.getShippingByOrderId(vmjExchange);
	}

    public HashMap<String, Object> getShippingInfo(VMJExchange vmjExchange){
		return record.getShippingInfo(vmjExchange);
	}

    public List<HashMap<String,Object>> getAllShipping(VMJExchange vmjExchange){
		return record.getAllShipping(vmjExchange);
	}
	
}
