package webshop.category.core;

import java.lang.Math;
import java.util.*;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.ForeignKey;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;


@Entity(name="category_impl")
@Table(name="category_impl")
public class CategoryImpl extends CategoryComponent {

	public CategoryImpl(UUID categoryId, String name) {
		this.categoryId = categoryId;
		this.name = name;
	}

	public CategoryImpl(String name) {
		this.categoryId =  UUID.randomUUID();;
		this.name = name;
	}
	
	public CategoryImpl() {
		this.categoryId =  UUID.randomUUID();
		this.name = "";
	}

}
