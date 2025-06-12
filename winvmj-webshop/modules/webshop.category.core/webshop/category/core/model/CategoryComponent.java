package webshop.category.core;

import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name="category_comp", uniqueConstraints = @UniqueConstraint(columnNames = { "name" }))
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class CategoryComponent implements Category{
	@Id
	public UUID categoryId; 
	public String name;
	protected String objectName = CategoryComponent.class.getName();

	public CategoryComponent() {

	} 

	public CategoryComponent(
        String name, UUID categoryId
    ) {
        this.name = name;
        this.categoryId = categoryId;
    }

	public String getName(){ return this.name; };
	public void setName(String name){ this.name = name; };
	
	public UUID getCategoryId(){ return this.categoryId;};
	public void setCategoryId(UUID categoryId){ this.categoryId = categoryId; };
	
 

	@Override
    public String toString() {
        return "{" +
			" id='" + getCategoryId() + "'" +
            " name='" + getName() + "'" +
            "}";
    }

	public HashMap<String, Object> toHashMap() {
        HashMap<String, Object> categoryMap = new HashMap<String,Object>();
		categoryMap.put("name",getName());
		categoryMap.put("categoryId",getCategoryId());

        return categoryMap;
    }
	
}
