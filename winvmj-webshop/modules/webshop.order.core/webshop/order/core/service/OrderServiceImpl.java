package webshop.order.core;
import java.util.*;
import vmj.routing.route.exceptions.NotFoundException;
import vmj.routing.route.exceptions.FieldValidationException;
import webshop.order.OrderFactory;
import webshop.catalog.core.*;
import webshop.customer.core.*;
import webshop.address.core.*;

public class OrderServiceImpl extends OrderServiceComponent{
    CustomerService customerService = new CustomerServiceImpl();
	CatalogService catalogService = new CatalogServiceImpl();
	AddressService addressService = new AddressServiceImpl();

	public OrderServiceImpl () {
   }
    public HashMap<String, Object> validateQuantity(HashMap<String, Object> body){
    	if (!body.containsKey("catalogId")) {
			throw new NotFoundException("Field 'catalogId' not found in the request body.");
		}
		String catalogIdStr = (String) body.get("catalogId");
		UUID catalogId = UUID.fromString(catalogIdStr);
		
		Catalog catalog = catalogRepository.getObject(catalogId);
		if (!body.containsKey("quantity")) {
			throw new NotFoundException("Field 'quantity' not found in the request body.");
		}
		String quantityStr = (String) body.get("quantity");
		int quantity = Integer.parseInt(quantityStr);
		if (catalog == null) {
	        throw new NotFoundException("Catalog with id " + catalogId +" not exist.");
	    } 
		int availableStock = catalog.getAvailableStock();
		if (quantity < 1){
			throw new FieldValidationException("Quantity must be more than 0");
		}
		if (availableStock < quantity) {
	        throw new FieldValidationException("The quantity you have selected exceeds the available stock. Please adjust your order accordingly.");
	    }
		int price = catalog.getPrice();
		int amount = quantity * price;
		HashMap<String, Object> responseMap = new HashMap<String,Object>();
		responseMap.put("catalogId", catalogId);
		responseMap.put("quantity",quantity);
		responseMap.put("amount",amount);
		return responseMap;
   }
	
    public HashMap<String, Object> previewOrder(UUID catalogId, int quantity, int amount){
		Catalog catalog = catalogRepository.getObject(catalogId);
		if (catalog == null) {
	        throw new NotFoundException("Catalog with id " + catalogId +" not exist.");
	    } 
		int price = catalog.getPrice();
		String pictureURL = catalog.getPictureURL();
		String name = catalog.getName();
		
		HashMap<String, Object> responseMap = new HashMap<String,Object>();
		responseMap.put("catalogId", catalogId);
		responseMap.put("name",name);
		responseMap.put("price",price);
		responseMap.put("amount",amount);
		responseMap.put("quantity",quantity);
		responseMap.put("pictureURL",pictureURL);
		
		return responseMap;
	}
	
	public Order saveOrder(HashMap<String, Object> body, String email){
    	Date date = new Date();
		UUID orderId = UUID.randomUUID();

		int amount = 0;
		if (body.containsKey("amount")) {
			amount = Integer.parseInt((String) body.get("amount"));
		}

		Address address = null;
		if (body.containsKey("addressId")) {
			String addressIdStr = (String) body.get("addressId");
			UUID addressId = UUID.fromString(addressIdStr);
			address = addressService.getAddress(addressId);
			if (address == null) {
				throw new NotFoundException("Address with id " + addressId +" not exist.");
			}
		}
		
		Customer customer = null;
		if (email != null) {
			customer = customerService.getCustomerByEmail(email);
			if (customer == null) {
				throw new NotFoundException("Customer with email " + email +" not exist.");
			}
	    } 
		String status = "Not Paid";
		Order order = OrderFactory.createOrder("webshop.order.core.OrderImpl", 
				status, orderId, date, amount, address, customer);
		System.out.println("save order core: " + order);
		orderRepository.saveObject(order);
		return order;
	}
    
    public Order getOrder(UUID orderId){
		Order order = orderRepository.getObject(orderId);
		return order;
	}

    public List<HashMap<String,Object>> transformOrderListToHashMap(List<Order> orderList){
		List<HashMap<String,Object>> resultList = new ArrayList<HashMap<String,Object>>();
        for(int i = 0; i < orderList.size(); i++) {
            resultList.add(orderList.get(i).toHashMap());
        }

        return resultList;
	}

    public List<Order> getOrderHistory(String email){
    	Customer customer = customerService.getCustomerByEmail(email);
    	UUID customerId = customer.getCustomerId();
    	List<Order> orderHistory = orderRepository.getListObject("order_comp", "customer_customerid", customerId);
		return orderHistory;
	}
    
    public List<Order> getAllOrder(){
    	List<Order> orders = orderRepository.getAllObject("order_impl");
		Set<UUID> uniqueIds = new HashSet<>();
        List<Order> uniqueOrders = new ArrayList<>();
        for (Order order : orders) {
            if (uniqueIds.add(order.getOrderId())) {
                uniqueOrders.add(order);
            }
        }
		return uniqueOrders;
	}

	public Order updateOrderStatus(UUID orderId, String status){
		Order order = orderRepository.getObject(orderId);
		order.setStatus(status);
		orderRepository.updateObject(order);
		return orderRepository.getObject(orderId);
	}
}
