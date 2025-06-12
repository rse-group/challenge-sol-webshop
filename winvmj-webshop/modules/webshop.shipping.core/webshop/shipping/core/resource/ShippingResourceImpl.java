package webshop.shipping.core;
import java.util.*;

import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import vmj.routing.route.exceptions.*;
import webshop.shipping.ShippingFactory;
import vmj.auth.annotations.Restricted;
//add other required packages


public class ShippingResourceImpl extends ShippingResourceComponent{
	private ShippingService shippingService = new ShippingServiceImpl();

    @Restricted(permissionName = "All")
    @Route(url="call/shipping/save")
    public HashMap<String,Object> saveShipping(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("POST")) {
		    HashMap<String, Object> requestBody = (HashMap<String, Object>) vmjExchange.getPayload(); 
			Shipping result = shippingService.saveShipping(requestBody);
			return result.toHashMap();
		}
		throw new NotFoundException("Route tidak ditemukan");
	}

	@Restricted(permissionName = "All")
    @Route(url="call/shipping/orderdetail")
    public HashMap<String, Object> getShippingByOrderId(VMJExchange vmjExchange){
		String orderIdStr = vmjExchange.getGETParam("orderId"); 
		UUID orderId = UUID.fromString(orderIdStr);
		Shipping result = shippingService.getShippingByOrderId(orderId);
		return result.toHashMap();
	}

	@Restricted(permissionName = "All")
    @Route(url="call/shipping/detail")
    public HashMap<String, Object> getShippingInfo(VMJExchange vmjExchange){
		return shippingService.getShippingInfo();
	}

    @Restricted(permissionName = "All")
    @Route(url="call/shipping/list")
    public List<HashMap<String,Object>> getAllShipping(VMJExchange vmjExchange){
		String email = vmjExchange.getAuthPayload().getEmail();
		List<Shipping> result = shippingService.getAllShipping(email);
		return shippingService.transformShippingListToHashMap(result);
	}

}
