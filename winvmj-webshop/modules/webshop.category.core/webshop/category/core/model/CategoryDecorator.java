package webshop.category.core;

import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

import javax.persistence.OneToOne;
import javax.persistence.MappedSuperclass;
import javax.persistence.CascadeType;
//add other required packages

@MappedSuperclass
public abstract class CategoryDecorator extends CategoryComponent{
    @OneToOne(cascade=CascadeType.ALL)
	protected CategoryComponent record;

	public CategoryDecorator (CategoryComponent record) {
		this.record = record;
	}

	public CategoryDecorator (UUID categoryId, CategoryComponent record) {
		this.categoryId =  categoryId;
		this.record = record;
	}

	public CategoryDecorator() {
		super();
		this.categoryId =  UUID.randomUUID();
	}

    public CategoryComponent getRecord() {
        return this.record;
    }

    public UUID getCategoryId() {
        return this.record.getCategoryId();
    }

    public void setCategoryId(UUID categoryId) {
        this.record.setCategoryId(categoryId);
    }

    public String getName() {
        return this.record.getName();
    }

    public void setName(String name) {
        this.record.setName(name);
    }
	
	public HashMap<String, Object> toHashMap() {
        return this.record.toHashMap();
    }

}
