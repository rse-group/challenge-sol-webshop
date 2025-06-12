package webshop.catalog.core;
import java.util.*;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.net.URLConnection;
import java.lang.RuntimeException;

import vmj.routing.route.exceptions.*;
import webshop.catalog.CatalogFactory;
import webshop.category.core.*;
import webshop.seller.core.*;

public class CatalogServiceImpl extends CatalogServiceComponent{
    SellerService sellerService = new SellerServiceImpl();
    CategoryService categoryService = new CategoryServiceImpl();
   
    public Catalog saveCatalog(HashMap<String, Object> body, String email){
        if (!body.containsKey("name")) {
            throw new FieldValidationException("Field 'name' not found in the request body.");
        }
        String name = (String) body.get("name");
        List<Catalog> savedCatalogs = getCatalogByName(name);
        if (!savedCatalogs.isEmpty()) {
            throw new BadRequestException("Catalog with name '" + name + "' already exists in repository.");
        }

        if (!body.containsKey("description")) {
            throw new FieldValidationException("Field 'description' not found in the request body.");
        }
        String description = (String) body.get("description");
        if (!body.containsKey("price")) {
            throw new FieldValidationException("Field 'price' not found in the request body.");
        }
        String priceStr = (String) body.get("price");
		int price = Integer.parseInt(priceStr);

        if (!body.containsKey("availableStock")) {
            throw new FieldValidationException("Field 'availableStock' not found in the request body.");
        }
		String availableStockStr = (String) body.get("availableStock");
		int availableStock = Integer.parseInt(availableStockStr);

        if (!body.containsKey("categoryId")) {
            throw new FieldValidationException("Field 'categoryId' not found in the request body.");
        }
		String categoryIdStr = (String) body.get("categoryId");
		UUID categoryId = UUID.fromString(categoryIdStr);
		Category category = categoryService.getCategory(categoryId);
        if (category == null) {
        	throw new NotFoundException("Category with categoryId " + categoryId +" not found");
        }

        if (!body.containsKey("pictureURL")) {
            throw new FieldValidationException("Field 'pictureURL' not found in the request body.");
        }
		Map<String, byte[]> uploadedFile = (HashMap<String, byte[]>) body.get("pictureURL");
		
        String pictureURL = "data:" + (new String(uploadedFile.get("type"))).split(" ")[1].replaceAll("\\s+", "")
                + ";base64," + Base64.getEncoder().encodeToString(uploadedFile.get("content"));
        int fileSize = uploadedFile.get("content").length;
        if (fileSize > 4000000)
            throw new FileSizeException(4.0, ((double) fileSize) / 1000000, "megabyte");
        try {
            String type = URLConnection
                    .guessContentTypeFromStream(new ByteArrayInputStream(uploadedFile.get("content")));
            if (type == null || !type.startsWith("image"))
                throw new FileTypeException("image");
        } catch (IOException e) {
            throw new FileNotFoundException();
        }
        UUID catalogId = UUID.randomUUID();
        Seller seller = null;
		if (email != null) {
			seller = sellerService.getSellerByEmail(email);
	    }

		Catalog catalog = CatalogFactory.createCatalog("webshop.catalog.core.CatalogImpl", catalogId, name, description, price, pictureURL, availableStock, seller, category);
        catalogRepository.saveObject(catalog);
        return catalogRepository.getObject(catalogId);
	}

    public Catalog updateCatalog(HashMap<String, Object> body){
    	if (!body.containsKey("catalogId")) {
    		throw new NotFoundException("Field 'catalogId' not found in the request body.");
    	}
    	String catalogIdStr = (String) body.get("catalogId");
    	UUID catalogId = UUID.fromString(catalogIdStr);
		
		Catalog catalog = catalogRepository.getObject(catalogId);
        if (catalog == null) {
	        throw new NotFoundException("Catalog with catalogId " + catalogId +" not found");
	    }

        if (!body.containsKey("categoryId")) {
            throw new FieldValidationException("Field 'categoryId' not found in the request body.");
        }
        String categoryIdStr = (String) body.get("categoryId");
    	UUID categoryId = UUID.fromString(categoryIdStr);
    	Category category = categoryService.getCategory(categoryId);
        if (category == null) {
        	throw new NotFoundException("Category with categoryId " + categoryId +" not found");
        }
        catalog.setCategory(category);
        
        if (body.containsKey("name")) {
        	String name =  (String) body.get("name");
            catalog.setName(name);
        }
        if (body.containsKey("description")) {
        	String description = (String) body.get("description");
            catalog.setDescription(description);
        }

		int price = -1 ;
		if (body.containsKey("price")) {
			try {
		        price = Integer.parseInt((String) body.get("price"));
			} catch (NumberFormatException e) {
		        throw new FieldValidationException("Price must be an integer");
		    }
		}
        if (price != -1) {
            catalog.setPrice(price);
        }

        int availableStock = -1 ;
        if (body.containsKey("availableStock")) {
			try {
                availableStock = Integer.parseInt((String) body.get("availableStock"));
			} catch (NumberFormatException e) {
		        throw new FieldValidationException("Available stock must be an integer");
		    }
		}
        if (availableStock != -1) {
            catalog.setAvailableStock(availableStock);
        }
		
        if (body.containsKey("pictureURL")) {
            Object rawUploadedFile = body.get("pictureURL");
     
            if (rawUploadedFile instanceof HashMap) {
                Map<String, byte[]> uploadedFile = (HashMap<String, byte[]>) rawUploadedFile;
                
                if (uploadedFile != null) {
                    String pictureURL = "data:" + new String(uploadedFile.get("type")).split(" ")[1].replaceAll("\\s+", "")
                            + ";base64," + Base64.getEncoder().encodeToString(uploadedFile.get("content"));
                    
                    // Validasi ukuran file
                    int fileSize = uploadedFile.get("content").length;
                    if (fileSize > 4000000) {
                        throw new FileSizeException(4.0, ((double) fileSize) / 1000000, "megabyte");
                    }

                    try {
                        String type = URLConnection
                                .guessContentTypeFromStream(new ByteArrayInputStream(uploadedFile.get("content")));
                        if (type == null || !type.startsWith("image")) {
                            throw new FileTypeException("image");
                        }
                    } catch (IOException e) {
                        throw new FileNotFoundException();
                    }

                    catalog.setPictureURL(pictureURL);
                }
            } else {
                throw new IllegalArgumentException("Invalid type for 'pictureURL': Expected HashMap<String, byte[]>.");
            }
        }
		
		catalogRepository.updateObject(catalog);
		catalog = catalogRepository.getObject(catalogId);

		return catalog;
	}

    public Catalog getCatalog(UUID catalogId){
		Catalog catalog = catalogRepository.getObject(catalogId);
		if (catalog.getIsDeleted()) {
			catalog = null;
		}
        if (catalog == null) {
            throw new NotFoundException("Catalog with catalogId " + catalogId + " not found");
        }
		return catalog;
	}

    public List<Catalog> getAllCatalog(){
		List<Catalog> catalogList = catalogRepository.getListObject("catalog_impl", "isDeleted", false);
        Set<String> uniqueNames = new HashSet<>();
        List<Catalog> uniqueCatalogs = new ArrayList<>();
        for (Catalog catalog : catalogList) {
            if (uniqueNames.add(catalog.getName())) {
                uniqueCatalogs.add(catalog);
            }
        }
		return uniqueCatalogs;
	}

    public List <Catalog> getCatalogByName(String name){
        List<Catalog> filteredCatalogs = catalogRepository.getListObject("catalog_impl", "name", name);
    	filteredCatalogs.removeIf(Catalog::getIsDeleted);  // Remove all elements with isDeleted = true
        return filteredCatalogs;
    }

    public List<Catalog> deleteCatalog(UUID catalogId){
    	// Soft delete
		Catalog catalog = catalogRepository.getObject(catalogId);
		catalog.setIsDeleted(true);
		catalogRepository.updateObject(catalog);
		return getAllCatalog();
	}

    public List<HashMap<String,Object>> transformCatalogListToHashMap(List<Catalog> catalogList){
		List<HashMap<String,Object>> resultList = new ArrayList<HashMap<String,Object>>();
        for(int i = 0; i < catalogList.size(); i++) {
            resultList.add(catalogList.get(i).toHashMap());
        }

        return resultList;
	}

    public Catalog updateCatalogStock(UUID catalogId, int quantity){
        Catalog catalog = getCatalog(catalogId);
        catalog.setAvailableStock(quantity);
        catalogRepository.updateObject(catalog);
        return catalog;
    }

}
