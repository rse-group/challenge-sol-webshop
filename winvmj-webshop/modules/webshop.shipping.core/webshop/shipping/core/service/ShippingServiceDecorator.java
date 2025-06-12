package webshop.shipping.core;
import java.util.*;

import vmj.routing.route.VMJExchange;

public abstract class ShippingServiceDecorator extends ShippingServiceComponent{
	protected ShippingServiceComponent record;

    public ShippingServiceDecorator(ShippingServiceComponent record) {
        this.record = record;
    }

	public Shipping saveShipping(HashMap<String, Object> requestBody){
		return record.saveShipping(requestBody);
	}

	public Shipping getShippingByOrderId(UUID orderId){
		return record.getShippingByOrderId(orderId);
	}

	public HashMap<String, Object> getShippingInfo(){
		return record.getShippingInfo();
	}

	public List<Shipping> getAllShipping(String email){
		return record.getAllShipping(email);
	}

    public List<HashMap<String,Object>> transformShippingListToHashMap(List<Shipping> shippingList){
		return record.transformShippingListToHashMap(shippingList);
	}
}
