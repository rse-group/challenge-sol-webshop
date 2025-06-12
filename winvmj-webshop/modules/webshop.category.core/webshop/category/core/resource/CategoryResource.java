package webshop.category.core;
import java.util.*;

import vmj.routing.route.VMJExchange;

public interface CategoryResource {
    HashMap<String,Object> saveCategory(VMJExchange vmjExchange);
    HashMap<String, Object> updateCategory(VMJExchange vmjExchange);
    HashMap<String, Object> getCategory(VMJExchange vmjExchange);
    List<HashMap<String,Object>> getAllCategory(VMJExchange vmjExchange);
    HashMap<String,Object> getCategoryByName(VMJExchange vmjExchange);
    List<HashMap<String,Object>> deleteCategory(VMJExchange vmjExchange);
}
