package webshop.shipping.inhousedelivery;
import java.util.*;

import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import vmj.routing.route.exceptions.*;
import vmj.auth.annotations.Restricted;
import webshop.shipping.core.*;

public class ShippingResourceImpl extends ShippingResourceDecorator {
    private ShippingService shippingService;
	public ShippingResourceImpl (ShippingResourceComponent recordController, ShippingServiceComponent recordService) {
        super(recordController);
        this.shippingService = new ShippingServiceImpl(recordService);
    }

    @Restricted(permissionName = "Customer")
    @Route(url="call/inhousedelivery/save")
    public HashMap<String,Object> save(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		HashMap<String, Object> requestBody = (HashMap<String, Object>) vmjExchange.getPayload();
		Shipping result = shippingService.saveShipping(requestBody);
		return result.toHashMap();
	}

	@Restricted(permissionName = "All")
    @Route(url="call/inhousedelivery/detail")
    public HashMap<String, Object> getShippingInfo(VMJExchange vmjExchange){
		return shippingService.getShippingInfo();
	}

    @Restricted(permissionName = "All")
    @Route(url="call/inhousedelivery/list")
    public List<HashMap<String,Object>> getAllShipping(VMJExchange vmjExchange){
		String email =  vmjExchange.getAuthPayload().getEmail();
		List<Shipping> shippingList = shippingService.getAllShipping(email);
		return shippingService.transformShippingListToHashMap(shippingList);
	}
	
}
