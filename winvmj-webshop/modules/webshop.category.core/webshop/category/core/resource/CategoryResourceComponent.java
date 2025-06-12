package webshop.category.core;
import java.util.*;

import vmj.hibernate.integrator.RepositoryUtil;
import vmj.routing.route.VMJExchange;
//add other required packages

public abstract class CategoryResourceComponent implements CategoryResource{
	protected RepositoryUtil<Category> categoryRepository;
	
	public CategoryResourceComponent() {
        this.categoryRepository = new RepositoryUtil<Category>(webshop.category.core.CategoryComponent.class);
    }
 
    public abstract HashMap<String,Object> saveCategory(VMJExchange vmjExchange);    
	public abstract HashMap<String, Object> updateCategory(VMJExchange vmjExchange);
    public abstract HashMap<String, Object> getCategory(VMJExchange vmjExchange);
    public abstract List<HashMap<String,Object>> getAllCategory(VMJExchange vmjExchange);
    public abstract HashMap<String,Object> getCategoryByName(VMJExchange vmjExchange);
    public abstract List<HashMap<String,Object>> deleteCategory(VMJExchange vmjExchange);

}
