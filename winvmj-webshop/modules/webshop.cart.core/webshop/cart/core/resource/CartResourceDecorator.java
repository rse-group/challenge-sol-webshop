package webshop.cart.core;
import java.util.*;

import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

public abstract class CartResourceDecorator extends CartResourceComponent{
	protected CartResourceComponent record;

    public CartResourceDecorator(CartResourceComponent record) {
        this.record = record;
    }

    public HashMap<String, Object> saveCart(VMJExchange vmjExchange){
		return record.saveCart(vmjExchange);
	}

    public HashMap<String, Object> updateCart(VMJExchange vmjExchange){
		return record.updateCart(vmjExchange);
	}

    public HashMap<String, Object> getCart(VMJExchange vmjExchange){
		return record.getCart(vmjExchange);
	}
    
    public HashMap<String, Object> getCartUnauthorized(VMJExchange vmjExchange){
		return record.getCartUnauthorized(vmjExchange);
	}

    public List<HashMap<String,Object>> getAllCart(VMJExchange vmjExchange){
		return record.getAllCart(vmjExchange);
	}

    public List<HashMap<String,Object>> deleteCart(VMJExchange vmjExchange){
		return record.deleteCart(vmjExchange);
	}
}
