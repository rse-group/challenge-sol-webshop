package webshop.category.core;
import java.util.*;

import vmj.routing.route.VMJExchange;

public interface CategoryService {
	Category saveCategory(HashMap<String, Object> requestBody);
    Category updateCategory(HashMap<String, Object> requestBody);
	Category getCategory(UUID categoryId);
    List<Category> getAllCategory();
    Category getCategoryByName(String name);
    List<Category> deleteCategory(UUID categoryId);
	List<HashMap<String, Object>> transformCategoryListToHashMap(List<Category> categoryList);
}
