package webshop.category.core;
import java.util.*;

import vmj.hibernate.integrator.RepositoryUtil;
import vmj.routing.route.VMJExchange;
//add other required packages

public abstract class CategoryServiceComponent implements CategoryService{
	protected RepositoryUtil<Category> categoryRepository;

    public CategoryServiceComponent(){
        this.categoryRepository = new RepositoryUtil<Category>(webshop.category.core.CategoryComponent.class);
    }	
    
    public abstract Category saveCategory(HashMap<String, Object> requestBody);
    public abstract Category updateCategory(HashMap<String, Object> requestBody);
	public abstract Category getCategory(UUID categoryId);
    public abstract List<Category> getAllCategory();
    public abstract Category getCategoryByName(String name);
    public abstract List<Category> deleteCategory(UUID categoryId);
	public abstract List<HashMap<String, Object>> transformCategoryListToHashMap(List<Category> categoryList);
}
