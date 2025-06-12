package webshop.order.core;
import java.util.*;
import com.google.gson.Gson;
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
import webshop.order.OrderItemFactory;
import webshop.cart.core.*;
import webshop.catalog.core.*;
//add other required packages

public class OrderItemServiceImpl extends OrderItemServiceComponent{
	OrderService orderService = new OrderServiceImpl();
	CartItemService cartItemService = new CartItemServiceImpl();
	CatalogService catalogService = new CatalogServiceImpl();
	
	// public List<HashMap<String, Object>> validateQuantity(HashMap<String, Object> requestBody, String email){
	public List<HashMap<String, Object>> validateQuantity(String email){
		// TODO: remove after cart in fe support checkbox
    	List<CartItem> cartItems = cartItemService.getCartItemsByCustomerEmail(email);
		List<String> cartItemsId = new ArrayList<>();
		for (CartItem cartItem : cartItems) {
			cartItemsId.add(cartItem.getCartItemId().toString());
		}
		
		// TODO: uncomment after cart in fe support checkbox
		// if (!requestBody.containsKey("cartItemsId")) {
		// 	throw new NotFoundException("Field 'cartItemsId' not found in request body");
		// }
		// List<String> cartItemsId = (List<String>) requestBody.get("cartItemsId");

		List<HashMap<String, Object>> responseMap = new ArrayList<HashMap<String,Object>>();
		for (String cartItemIdStr : cartItemsId) {
			UUID cartItemId = UUID.fromString(cartItemIdStr);
			CartItem cartItem = cartItemService.getCartItem(cartItemId);
			Catalog catalog = cartItem.getCatalog();
			int quantity = cartItem.getQuantity();
			int availableStock = catalog.getAvailableStock();
			if (quantity < 1){
				throw new FieldValidationException("Quantity for the item " + catalog.getName() + " must be more than 0");
			}
			if (availableStock < quantity) {
				throw new FieldValidationException("The quantity you have selected for the item " + catalog.getName() + " exceeds the available stock. Please adjust your order accordingly.");
			}
			responseMap.add(cartItemService.toHashmapWithCatalog(cartItem));
		}
		return responseMap;
	}

    public List<OrderItem> saveOrderItem(HashMap<String, Object> body, String email) {	
        Order order = orderService.saveOrder(body, email);
			List<OrderItem> orderItems = createOrderItem(body, order, email);
        return orderItems;
    }

		public List<OrderItem> createOrderItem(HashMap<String, Object> body, Order order, String email) {
		List<OrderItem> orderItems = new ArrayList<>();
        
		// TODO: remove after cart in fe support checkbox
		List<CartItem> cartItems = cartItemService.getCartItemsByCustomerEmail(email);
		List<String> cartItemsId = new ArrayList<>();
		for (CartItem cartItem : cartItems) {
			cartItemsId.add(cartItem.getCartItemId().toString());
		}

		// TODO: uncomment after cart in fe support checkbox
        // List<String> cartItemsId = (List<String>) body.get("cartItemsId");
        // if (cartItemsId == null) {
        //     throw new NotFoundException("Field 'cartItemsId' not found in request body");
        // }
        
		int amount = order.getAmount();
        for(String cartItemIdStr : cartItemsId) {
			UUID cartItemId = UUID.fromString(cartItemIdStr);
			CartItem cartItem = cartItemService.getCartItem(cartItemId);
            Catalog catalog = cartItem.getCatalog();
            int quantity = cartItem.getQuantity();
            
            OrderItem orderItem = createOrderItem(quantity, order, catalog);
            orderItems.add(orderItem);
			catalogService.updateCatalogStock(catalog.getCatalogId(), catalog.getAvailableStock() - quantity);
			amount = amount + orderItem.getSubtotal();
			cartItemService.deleteCartItem(cartItemId);
        }
		order.setAmount(amount);
		orderRepository.updateObject(order);
        return orderItems;
    }

	public OrderItem createOrderItem(int quantity, Order order, Catalog catalog) {
		UUID orderId = UUID.randomUUID();
		OrderItem orderItem = OrderItemFactory.createOrderItem(
            "webshop.order.core.OrderItemImpl",
			orderId,
            quantity, 
            order,
            catalog
        );
		orderItemRepository.saveObject(orderItem);
		return orderItem;
	}

	public List<OrderItem> saveOrderItemNow(HashMap<String, Object> body, String email, UUID catalogId) {
		if (!body.containsKey("quantity")) {
			throw new NotFoundException("Field 'quantity' not found in the request body.");
		}
		int quantity = Integer.parseInt((String) body.get("quantity"));

		Catalog catalog = catalogService.getCatalog(catalogId);
		if (catalog == null) {
			throw new FieldValidationException("Catalog ID not found.");
		}

		int availableStock = catalog.getAvailableStock();
		if (availableStock < quantity) {
			throw new FieldValidationException("The quantity you have selected for the item " + catalog.getName() + " exceeds the available stock (" + availableStock + "). Please adjust your order accordingly.");
		}

		Order order = orderService.saveOrder(body, email);
		List<OrderItem> orderItems = createOrderItemNow(body, order, catalog);
		return orderItems;
	}

	public List<OrderItem> createOrderItemNow(HashMap<String, Object> body, Order order, Catalog catalog) {
		int quantity = Integer.parseInt((String) body.get("quantity"));

		List<OrderItem> orderItems = new ArrayList<>();

			OrderItem orderItem = createOrderItem(quantity, order, catalog);
		orderItems.add(orderItem);
		catalogService.updateCatalogStock(catalog.getCatalogId(), catalog.getAvailableStock() - quantity);

		int amount = orderItem.getSubtotal();
		order.setAmount(amount);
		orderRepository.updateObject(order);
		return orderItems;
	}

    public OrderItem getOrderItem(UUID orderItemId){
		return orderItemRepository.getObject(orderItemId);
	}

    public List<OrderItem> getAllOrderItem(){
		List<OrderItem> orderItemList = orderItemRepository.getAllObject("orderitem_impl");
		Set<UUID> uniqueOrderItemIds = new HashSet<>();
		List<OrderItem> uniqueOrderItems = new ArrayList<>();
		for (OrderItem orderItem : orderItemList) {
			if (uniqueOrderItemIds.add(orderItem.getOrderItemId())) {
				uniqueOrderItems.add(orderItem);
			}
		}
		return uniqueOrderItems;
	}

    public List<HashMap<String,Object>> transformOrderItemListToHashMap(List<OrderItem> orderItemList){
		List<HashMap<String,Object>> resultList = new ArrayList<HashMap<String,Object>>();
        for(int i = 0; i < orderItemList.size(); i++) {
            resultList.add(orderItemList.get(i).toHashMap());
        }

        return resultList;
	}

	public List<OrderItem> getOrderItemHistory(UUID orderId){
		return orderItemRepository.getListObject("orderitem_comp", "order_orderid", orderId);
	}
}
