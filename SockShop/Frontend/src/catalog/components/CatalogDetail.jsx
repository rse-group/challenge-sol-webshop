/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';




import deleteCatalog from '../services/deleteCatalog'
import * as Layouts from "@/commons/layouts";

const CatalogDetail = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalConfirmDeleteCatalog, setShowModalConfirmDeleteCatalog] = React.useState(false); 
    const edit = async () => {
      navigate(
        '/catalog/edit?'
        + `catalogId=${data.catalogId}`
        
      );
    };
  
    const confirmDelete = async () => {
      await deleteCatalog({
        catalogId: data.catalogId,
      });
      navigate('/catalog');
    };

    const addToCart = async () => {
      navigate(
        '/cart/items/add?'
        + `catalogId=${data.catalogId}`
        
      );
    };

    const buyNow = async () => {
      navigate(
        '/order-now?'
        + `catalogId=${data.catalogId}`
        
      );
    };
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "pictureURL",
                  condition: "",
                  label: "pictureURL",
                  featureName: "pictureURL",
                }
        ,        {
                  id: "name",
                  condition: "",
                  label: "Name",
                  featureName: "name",
                }
        ,        {
                  id: "price",
                  condition: "isCurrency",
                  label: "Price",
                  featureName: "price",
                }
        ,        {
                  id: "description",
                  condition: "",
                  label: "Description",
                  featureName: "description",
                }
        ,        {
                  id: "stock",
                  condition: "",
                  label: "Stock",
                  featureName: "availableStock",
                }
        ,        {
                  id: "category",
                  condition: "",
                  label: "Category",
                  featureName: "categoryName",
                }
        
      ]}
      itemsEvents={[
          checkPermission("SaveCartItem") &&  (
          	<Button
          	  id="_roHScPGGEe-uNNfr9Yv8JQ"
          	  variant="secondary"
              onClick={() => addToCart()}
          	>
          	  Add to Cart
          	</Button>
          )
        ,
          checkPermission("SaveOrder") &&  (
        	<Button
        	  id="_dvKGoP8QEe-bvoi3XzdH9A"
        	  variant="secondary"
            onClick={() => buyNow()}
        	>
        	  Buy Now
        	</Button>
        )
        ,
          checkPermission("UpdateCatalog") &&  (
        	<Button
        	  id="_xUm5ICM0EfCdW_H1NywOIw"
        	  variant="secondary"
        	  onClick={() => edit()}
        	>
        	  Edit
        	</Button>
        )
        ,
          checkPermission("DeleteCatalog") &&  (
        	<Button
        	  id="_8dqRMCM0EfCdW_H1NywOIw"
        	  variant="secondary"
        	  onClick={() => setShowModalConfirmDeleteCatalog(true)}
        	>
        	  Delete
        	</Button>
        )
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalConfirmDeleteCatalog}
           title={"Confirm Delete Catalog"}
        >
           <Link to=''><Button variant="tertiary" onClick={() => setShowModalConfirmDeleteCatalog(false)}>Batal</Button></Link>
          <Button
            id="__OESQMMLEe-RLeGDC5kypA"
            variant="secondary"
            onClick={() => confirmDelete()}
          >
            Confirm Delete
          </Button>
        </Modal>,
        
      ]}
    />
  );
};

export default CatalogDetail;
