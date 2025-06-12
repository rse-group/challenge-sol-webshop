package webshop.order.unauthorized;

import java.util.*;

import vmj.routing.route.VMJExchange;
import vmj.routing.route.exceptions.*;
import java.io.IOException;
import com.google.gson.Gson;

import webshop.order.core.*;
import webshop.catalog.core.*;
import webshop.address.core.*;
import webshop.cart.core.*;
public class OrderItemServiceImpl extends OrderItemServiceDecorator {
	private OrderService orderService;

	public OrderItemServiceImpl(OrderItemServiceComponent record) {
		super(record);
		this.orderService = new webshop.order.unauthorized.OrderServiceImpl(new webshop.order.core.OrderServiceImpl());
	}

	AddressService addressService = new AddressServiceImpl();
	CatalogService catalogService = new CatalogServiceImpl();
	CartItemService cartItemService = new CartItemServiceImpl();

	public List<OrderItem> saveOrderItem(HashMap<String, Object> body, String email) {
		Address address = addressService.saveAddress(body, null);
		body.put("addressId", address.getAddressId().toString());
		Order order = orderService.saveOrder(body, email);

		return createOrderItem(body, order, null);
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

		Address address = addressService.saveAddress(body, null);
		body.put("addressId", address.getAddressId().toString());
		Order order = orderService.saveOrder(body, email);

		return record.createOrderItemNow(body, order, catalog);
	}


	public List<OrderItem> createOrderItem(HashMap<String, Object> body, Order order, String email) {
		List<OrderItem> orderItems = new ArrayList<>();
		String cartIdStr = (String) body.get("cartId");
		// TODO: remove after cart in fe support checkbox
		List<CartItem> cartItems = cartItemService.getUnauthorizedCartItems(cartIdStr);
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
            
            OrderItem orderItem = record.createOrderItem(quantity, order, catalog);
            orderItems.add(orderItem);
			catalogService.updateCatalogStock(catalog.getCatalogId(), catalog.getAvailableStock() - quantity);
			amount = amount + orderItem.getSubtotal();
			cartItemService.deleteCartItem(cartItemId);
        }
		order.setAmount(amount);
		orderRepository.updateObject(order);
		return orderItems;
	}

	public List<HashMap<String, Object>> transformOrderItemListToHashMap(List<OrderItem> orderItems) {
		List<HashMap<String, Object>> resultList = new ArrayList<>();
		for (OrderItem orderItem : orderItems) {
			resultList.add(orderItem.toHashMap());
		}
		return resultList;
	}
}
