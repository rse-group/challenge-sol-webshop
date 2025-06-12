package webshop.category.core;
import java.util.*;

import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

public abstract class CategoryResourceDecorator extends CategoryResourceComponent{
	protected CategoryResourceComponent record;

    public CategoryResourceDecorator(CategoryResourceComponent record) {
        this.record = record;
    }

    public HashMap<String,Object> saveCategory(VMJExchange vmjExchange){
		return record.saveCategory(vmjExchange);
	}

    public HashMap<String, Object> updateCategory(VMJExchange vmjExchange){
		return record.updateCategory(vmjExchange);
	}

    public HashMap<String, Object> getCategory(VMJExchange vmjExchange){
		return record.getCategory(vmjExchange);
	}

    public List<HashMap<String,Object>> getAllCategory(VMJExchange vmjExchange){
		return record.getAllCategory(vmjExchange);
	}

	public HashMap<String,Object> getCategoryByName(VMJExchange vmjExchange){
		return record.getCategoryByName(vmjExchange);
	}

    public List<HashMap<String,Object>> deleteCategory(VMJExchange vmjExchange){
		return record.deleteCategory(vmjExchange);
	}

}
