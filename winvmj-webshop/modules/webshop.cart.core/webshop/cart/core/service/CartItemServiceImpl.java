package webshop.cart.core;
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
import webshop.cart.CartItemFactory;
import webshop.catalog.core.*;

public class CartItemServiceImpl extends CartItemServiceComponent{
	private CatalogService catalogService = new CatalogServiceImpl();
	private CartService cartService = new CartServiceImpl();
	
	public CartItem saveCartItem(String email, HashMap<String, Object> requestBody) {
		if (!requestBody.containsKey("catalogId")) {
			throw new NotFoundException("Field 'catalogId' not found in the request body.");
		}
		String catalogIdStr = (String) requestBody.get("catalogId");
		UUID catalogId = UUID.fromString(catalogIdStr);

		int quantity = 1;
		if (requestBody.containsKey("quantity")) {
			String quantityStr = (String) requestBody.get("quantity");
			quantity = Integer.parseInt(quantityStr);	
		}

		Cart cart = cartService.getCartByCustomerEmail(email);
		Catalog catalog = catalogService.getCatalog(catalogId);
	
		if (cart == null) {
			throw new NotFoundException("Cart not found for email: " + email);
		}
		if (catalog == null) {
			throw new NotFoundException("Catalog not found for ID: " + catalogId);
		}
		
		UUID cartId = cart.getCartId();

		List<CartItem> cartItems = cartItemRepository.getListObject("cartitem_comp", "cart_cartid", cartId);
		if (!cartItems.isEmpty()) {
			for (CartItem cartItem : cartItems) {
				if (cartItem.getCatalog().getCatalogId().equals(catalogId)) {
					quantity = cartItem.getQuantity() + quantity;
					cartItem.setQuantity(quantity);
					cartItemRepository.updateObject(cartItem);
					calculateTotal(cartId);
					return cartItem;
				}
			}
		}
		UUID cartItemId = UUID.randomUUID();
		CartItem cartItem = CartItemFactory.createCartItem(
			"webshop.cart.core.CartItemImpl",
			cartItemId,
			quantity,
			cart,
			catalog
		);
		System.out.println("cartItem: " + cartItem);
		cartItemRepository.saveObject(cartItem);

		calculateTotal(cartId);
		return cartItem;
	}
	
	public CartItem saveUnauthorizedCartItem(String cartIdStr, HashMap<String, Object> requestBody) {
		Cart cart = cartService.getUnauthorizedCart(cartIdStr);
		UUID cartId = cart.getCartId();
		
		if (!requestBody.containsKey("catalogId")) {
			throw new NotFoundException("Field 'catalogId' not found in the request body.");
		}
		
		String catalogIdStr = (String) requestBody.get("catalogId");
		UUID catalogId = UUID.fromString(catalogIdStr);
		Catalog catalog = catalogService.getCatalog(catalogId);
		
		if (catalog == null) {
			throw new NotFoundException("Catalog not found for ID: " + catalogId);
		}

		int quantity = 1;
		if (requestBody.containsKey("quantity")) {
			String quantityStr = (String) requestBody.get("quantity");
			quantity = Integer.parseInt(quantityStr);	
		}

		List<CartItem> cartItems = cartItemRepository.getListObject("cartitem_comp", "cart_cartid", cartId);
		if (!cartItems.isEmpty()) {
			for (CartItem cartItem : cartItems) {
				if (cartItem.getCatalog().getCatalogId().equals(catalogId)) {
					quantity = cartItem.getQuantity() + quantity;
					cartItem.setQuantity(quantity);
					cartItemRepository.updateObject(cartItem);
					calculateTotal(cartId);
					return cartItem;
				}
			}
		}
		
		UUID cartItemId = UUID.randomUUID();
		CartItem cartItem = CartItemFactory.createCartItem(
			"webshop.cart.core.CartItemImpl", 
			cartItemId,
			quantity,
			cart,
			catalog
		);
		System.out.println("cartItem: " + cartItem);
		cartItemRepository.saveObject(cartItem);

		calculateTotal(cartId);
		return cartItem;
	}

    public CartItem updateCartItem(HashMap<String, Object> requestBody) {
		if (!requestBody.containsKey("cartItemId")) {
			throw new NotFoundException("Field 'cartItemId' is required.");
		}

		UUID cartItemId = UUID.fromString((String) requestBody.get("cartItemId"));
		CartItem cartItem = cartItemRepository.getObject(cartItemId);
		if (cartItem == null) {
			throw new NotFoundException("CartItem not found for ID: " + cartItemId);
		}
		
		if (!requestBody.containsKey("quantity")) {
			throw new NotFoundException("Field 'quantity' is required.");
		}
		
		String quantityStr = (String) requestBody.get("quantity");
		int quantity = Integer.parseInt(quantityStr);	
		cartItem.setQuantity(quantity);
	
		cartItemRepository.updateObject(cartItem);

		Cart cart = cartItem.getCart();
		calculateTotal(cart.getCartId());
		return cartItem;
	}

	public CartItem getCartItem(UUID id) {
		CartItem cartItem = cartItemRepository.getObject(id);
		if (cartItem == null) {
			throw new NotFoundException("CartItem not found for ID: " + id);
		}
		return cartItem;
	}
	
	public List<CartItem> getAllCartItem() {
		List<CartItem> cartItemList = cartItemRepository.getAllObject("cartitem_impl");
        Set<UUID> uniqueIds = new HashSet<>();
        List<CartItem> uniqueCartItems = new ArrayList<>();
        for (CartItem cartItem : cartItemList) {
            if (uniqueIds.add(cartItem.getCartItemId())) {
                uniqueCartItems.add(cartItem);
            }
        }
		return uniqueCartItems;
	}
	
    public List<CartItem> deleteCartItem(UUID id){
		CartItem cartItem = getCartItem(id);
		UUID cartId = cartItem.getCart().getCartId();
		cartItemRepository.deleteObject(id);

		calculateTotal(cartId);
		return getAllCartItem();
	}

    public List<CartItem> getCartItemsByCartId(UUID cartId) {
       List<CartItem> cartItems = cartItemRepository.getListObject("cartitem_comp", "cart_cartId", cartId);
       return cartItems;
    }
    
    public List<CartItem> getUnauthorizedCartItems(String cartIdStr) {
    	boolean isCartIdNotPresent = cartIdStr == null || cartIdStr.isEmpty();
    	return isCartIdNotPresent ? Collections.emptyList() : getCartItemsByCartId(UUID.fromString(cartIdStr));
    }

    public HashMap<String, Object> toHashmapWithCatalog(CartItem cartItem) {
        Catalog catalog = cartItem.getCatalog();

        HashMap<String, Object> cartItemMap = new HashMap<>();
        cartItemMap.put("cartItemId", cartItem.getCartItemId());
        cartItemMap.put("quantity", cartItem.getQuantity());
        cartItemMap.put("cartId", cartItem.getCart().getCartId());
        cartItemMap.put("amount", cartItem.getSubtotal());
		cartItemMap.put("stockStatus", cartItem.getStockStatus());
        cartItemMap.put("catalogId", catalog.getCatalogId());
        cartItemMap.put("name", catalog.getName());
        cartItemMap.put("description", catalog.getDescription());
        cartItemMap.put("price", catalog.getPrice());
        cartItemMap.put("pictureURL", catalog.getPictureURL());

        return cartItemMap;
    }

	public List<CartItem> clearCart(UUID cartId) {
		if (cartId == null) {
        	throw new IllegalArgumentException("cartId cannot be null");
		}

		Cart cart = cartService.getCart(cartId);
		if (cart == null) {
			throw new NotFoundException("Cart not found for ID: " + cartId);
		}
		
		List<CartItem> cartItems = getCartItemsByCartId(cartId);
		for (CartItem cartItem : cartItems) {
			cartItemRepository.deleteObject(cartItem.getCartItemId());
		}
		
		cart.setAmount(0);
		cartRepository.updateObject(cart);
		return getCartItemsByCartId(cartId);
	}
	
	public int calculateTotal(UUID cartId) {
		List<CartItem> cartItems = getCartItemsByCartId(cartId);
		int totalAmount = 0;
		for (CartItem cartItem : cartItems) {
			totalAmount += cartItem.getSubtotal();
		}
	
		Cart cart = cartService.getCart(cartId);
		cart.setAmount(totalAmount);
		cartRepository.updateObject(cart);
		return totalAmount;
	}

	public List<HashMap<String,Object>> transformCartItemListToHashMap(List<CartItem> cartItemList){
		List<HashMap<String,Object>> resultList = new ArrayList<HashMap<String,Object>>();
        for(int i = 0; i < cartItemList.size(); i++) {
            resultList.add(cartItemList.get(i).toHashMap());
        }

        return resultList;
	}

	public List<HashMap<String,Object>> transformCartItemListWithCatalogToHashMap(List<CartItem> cartItemList){
		List<HashMap<String,Object>> resultList = new ArrayList<HashMap<String,Object>>();
        for(int i = 0; i < cartItemList.size(); i++) {
            resultList.add(toHashmapWithCatalog(cartItemList.get(i)));
        }

        return resultList;
	}

	public List<CartItem> getCartItemsByCustomerEmail(String email) {
		Cart cart = cartService.getCartByCustomerEmail(email);
		return getCartItemsByCartId(cart.getCartId());
	}
}
