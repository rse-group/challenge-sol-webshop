package webshop.catalog.core;
import vmj.routing.route.Route;
import vmj.routing.route.VMJExchange;
import java.util.*;

import webshop.seller.core.*;
import webshop.category.core.*;

public interface Catalog {
	public UUID getCatalogId();
	public void setCatalogId(UUID catalogId);
	public String getName();
	public void setName(String name);
	public String getDescription();
	public void setDescription(String description);
	public int getPrice();
	public void setPrice(int price);
	public String getPictureURL();
	public void setPictureURL(String pictureURL);
	public int getAvailableStock();
	public void setAvailableStock(int availableStock);
	public boolean getIsDeleted();
	public void setIsDeleted(boolean isDeleted);
	public Seller getSeller();
    public void setSeller(Seller seller);
	public Category getCategory();
	public void setCategory(Category category);
	HashMap<String, Object> toHashMap();
}
