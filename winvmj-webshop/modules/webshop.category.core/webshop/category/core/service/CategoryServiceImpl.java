package webshop.category.core;
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
import webshop.category.CategoryFactory;
//add other required packages

public class CategoryServiceImpl extends CategoryServiceComponent{
    public Category saveCategory(HashMap<String, Object> body){
		if (!body.containsKey("name")) {
            throw new FieldValidationException("Field 'name' not found in the request body.");
        }
		String name = (String) body.get("name");
        Category savedCategory = getCategoryByName(name);
        if (savedCategory != null) {
            throw new BadRequestException("Category with name '" + name + "' already exists in repository.");
        }

        UUID categoryId = UUID.randomUUID();

		Category category = CategoryFactory.createCategory("webshop.category.core.CategoryImpl", categoryId, name);
		categoryRepository.saveObject(category);
		return categoryRepository.getObject(categoryId);
	}

    public Category updateCategory(HashMap<String, Object> requestBody){
		if (!requestBody.containsKey("categoryId")) {
    		throw new NotFoundException("Field 'categoryId' not found in the request body.");
    	}
    	String categoryIdStr = (String) requestBody.get("categoryId");
    	UUID categoryId = UUID.fromString(categoryIdStr);

		Category category = categoryRepository.getObject(categoryId);
        if (category == null) {
	        throw new NotFoundException("Category with categoryId " + categoryId +" not found");
	    }

		if (requestBody.containsKey("name")) {
        	String name =  (String) requestBody.get("name");
            category.setName(name);
        }

		categoryRepository.updateObject(category);
		category = categoryRepository.getObject(categoryId);

		return category;
	}

    public Category getCategory(UUID categoryId){
		Category category = categoryRepository.getObject(categoryId);
		// TODO: handle if category not found
		return category;
	}

    public List<Category> getAllCategory(){
		List<Category> categoryList = categoryRepository.getAllObject("category_impl");
        Set<String> uniqueNames = new HashSet<>();
        List<Category> uniqueCategories = new ArrayList<>();
        for (Category category : categoryList) {
            if (uniqueNames.add(category.getName())) {
                uniqueCategories.add(category);
            }
        }
		return uniqueCategories;
	}

	public Category getCategoryByName(String name){
        List<Category> filteredCategories = categoryRepository.getListObject("category_impl", "name", name);
    	// filteredCategories.removeIf(category::getIsDeleted);  // Remove all elements with isDeleted = true
        if (filteredCategories.size() != 0) {
            for (Category category : filteredCategories) {
                if (category.getName().equalsIgnoreCase(name)) { // Case-insensitive comparison
                    return category;
                }
            }	
        }
        return null;
    }

	public List<Category> deleteCategory(UUID categoryId){
    	// Hard delete
		// TODO: behavior for deleting a category -> set null for catalog
		// Category category = categoryRepository.getObject(categoryId);
		// category.setIsDeleted(true);
		categoryRepository.deleteObject(categoryId);
		return getAllCategory();
	}

	public List<HashMap<String,Object>> transformCategoryListToHashMap(List<Category> categoryList){
		List<HashMap<String,Object>> resultList = new ArrayList<HashMap<String,Object>>();
        for(int i = 0; i < categoryList.size(); i++) {
            resultList.add(categoryList.get(i).toHashMap());
        }

        return resultList;
	}

}
