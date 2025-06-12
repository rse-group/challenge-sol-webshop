package webshop.category.core;
import java.util.*;

import vmj.routing.route.VMJExchange;

public abstract class CategoryServiceDecorator extends CategoryServiceComponent{
	protected CategoryServiceComponent record;

    public CategoryServiceDecorator(CategoryServiceComponent record) {
        this.record = record;
    }

	public Category saveCategory(HashMap<String, Object> requestBody){
		return record.saveCategory(requestBody);
	}

	public Category updateCategory(HashMap<String, Object> requestBody){
		return record.updateCategory(requestBody);
	}

	public Category getCategory(UUID categoryId){
		return record.getCategory(categoryId);
	}

	public List<Category> getAllCategory(){
		return record.getAllCategory();
	}

	public Category getCategoryByName(String name){
		return record.getCategoryByName(name);
	}

    public List<Category> deleteCategory(UUID categoryId){
		return record.deleteCategory(categoryId);
	}

	public List<HashMap<String, Object>> transformCategoryListToHashMap(List<Category> categoryList){
		return record.transformCategoryListToHashMap(categoryList);
	}

}
