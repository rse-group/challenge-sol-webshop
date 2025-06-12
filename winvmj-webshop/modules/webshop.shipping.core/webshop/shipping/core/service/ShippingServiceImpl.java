package webshop.shipping.core;
import java.util.*;
import com.google.gson.Gson;
import java.util.*;
import java.util.logging.Logger;
import java.io.File;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import vmj.routing.route.exceptions.*;
import webshop.shipping.ShippingFactory;
import vmj.auth.annotations.Restricted;
import webshop.order.core.*;
import webshop.customer.core.*;
//add other required packages

public class ShippingServiceImpl extends ShippingServiceComponent{
	private ShippingFactory shippingFactory = new ShippingFactory();
	CustomerService customerService = new CustomerServiceImpl();

	public Shipping saveShipping(HashMap<String, Object> requestBody){
		if (!requestBody.containsKey("orderId")){
			throw new FieldValidationException("Field 'orderId' not found in the request body.");
		}
		UUID orderId = UUID.fromString(requestBody.get("orderId").toString());
		Order order = orderRepository.getObject(orderId);
		if (order == null){
			throw new NotFoundException("Order with orderId " + orderId + " not found");
		}

		List<Shipping> shippingList = shippingRepository.getListObject("shipping_comp", "order_orderid", orderId);
		if (shippingList.size() > 0){
			throw new FieldValidationException("Shipping for orderId " + orderId + " already exists");
		}

		String courier = (String) requestBody.get("courier");
		String service = (String) requestBody.get("service");
		String type = (String) requestBody.get("type");
		String weightStr = (String) requestBody.get("weight");
		int weight = Integer.parseInt(weightStr);
		String shippingCostStr = (String) requestBody.get("shippingCost");
		int shippingCost = Integer.parseInt(shippingCostStr);
		String estimation = (String) requestBody.get("estimation");
		String airwayBill = (String) requestBody.get("airwayBill");
		String status = "Pending";

		UUID shippingId = UUID.randomUUID();
		Shipping shipping = ShippingFactory.createShipping(
			"webshop.shipping.core.ShippingImpl",
			shippingId,
			courier,
			service,
			type,
			weight,
			shippingCost,
			estimation,
			airwayBill,
			status,
			order
		);
		shippingRepository.saveObject(shipping);

		int orderAmount = order.getAmount();
		int amount = orderAmount + shippingCost;
		order.setAmount(amount);
		orderRepository.updateObject(order);

		return shipping;
	}

	public Shipping getShippingByOrderId(UUID orderId){
		List<Shipping> shippingList = shippingRepository.getListObject("shipping_comp", "order_orderid", orderId);
		if (shippingList.isEmpty()){
			throw new NotFoundException("Shipping with orderId " + orderId + " not found");
		}
		return shippingList.get(0);
	}
	
	public HashMap<String, Object> getShippingInfo() {
		HashMap<String, Object> info = new HashMap<>();
		info.put("type", "core");
		info.put("description", "This is the abstract class for shipping");
		return info;
	}

    public List<Shipping> getAllShipping(String email){
		Customer customer = customerService.getCustomerByEmail(email);
		UUID customerId = customer.getCustomerId();
		List<Shipping> shippingList = shippingRepository.getListObject("shipping_impl", "customer_customerid", customerId);
		return shippingList;
	}

    public List<HashMap<String,Object>> transformShippingListToHashMap(List<Shipping> shippingList){
		List<HashMap<String,Object>> resultList = new ArrayList<HashMap<String,Object>>();
        for(int i = 0; i < shippingList.size(); i++) {
            resultList.add(shippingList.get(i).toHashMap());
        }

        return resultList;
	}

}
