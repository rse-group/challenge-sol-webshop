package webshop.category.core;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import java.util.*;

public interface Category {
	public String getName();
	public void setName(String name);
	public UUID getCategoryId();
	public void setCategoryId(UUID categoryId);
	HashMap<String, Object> toHashMap();
}
