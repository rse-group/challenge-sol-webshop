package webshop.category.core;
import java.util.*;

import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import vmj.routing.route.exceptions.*;
import webshop.category.CategoryFactory;
import webshop.category.core.*;
import vmj.auth.annotations.Restricted;
//add other required packages

public class CategoryResourceImpl extends CategoryResourceComponent{
	private CategoryService categoryService = new CategoryServiceImpl();

	@Restricted(permissionName = "Seller")
    @Route(url="call/category/save")
    public HashMap<String,Object> saveCategory(VMJExchange vmjExchange){
		HashMap<String, Object> body = (HashMap<String, Object>) vmjExchange.getPayload();
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		Category category = categoryService.saveCategory(body);
		return category.toHashMap();
	}

    @Restricted(permissionName = "Seller")
    @Route(url="call/category/update")
    public HashMap<String, Object> updateCategory(VMJExchange vmjExchange){
		HashMap<String, Object> body = (HashMap<String, Object>) vmjExchange.getPayload(); 
		if (vmjExchange.getHttpMethod().equals("OPTIONS")){
			return null;
		}
		Category category = categoryService.updateCategory(body);
		return category.toHashMap();
	}

    @Route(url="call/category/detail")
    public HashMap<String, Object> getCategory(VMJExchange vmjExchange){
		String categoryIdStr = vmjExchange.getGETParam("categoryId"); 
		UUID categoryId = UUID.fromString(categoryIdStr);
		Category category = categoryService.getCategory(categoryId);
		return category.toHashMap();
	}

    @Route(url="call/category/list")
    public List<HashMap<String,Object>> getAllCategory(VMJExchange vmjExchange){
		List <Category> categoryList = categoryService.getAllCategory();
		return categoryService.transformCategoryListToHashMap(categoryList);
	}
    
    @Route(url="call/category/filter")
    public HashMap<String,Object> getCategoryByName(VMJExchange vmjExchange){
		String name = vmjExchange.getGETParam("name"); 
		Category category = categoryService.getCategoryByName(name);
		return category.toHashMap();
	}

	@Restricted(permissionName = "Seller")
    @Route(url="call/category/delete")
    public List<HashMap<String,Object>> deleteCategory(VMJExchange vmjExchange){
		if (vmjExchange.getHttpMethod().equals("OPTIONS")) {
			return null;
		}
		HashMap<String, Object> body = (HashMap<String, Object>) vmjExchange.getPayload();
		String categoryIdStr = (String) body.get("categoryId");
    	UUID categoryId = UUID.fromString(categoryIdStr);
		List <Category> categoryList = categoryService.deleteCategory(categoryId);
		return categoryService.transformCategoryListToHashMap(categoryList);
	}

}
