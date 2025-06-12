/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';

import deleteCategory from '../services/deleteCategory'
import * as Layouts from "@/commons/layouts";
const CategoryTable = ({ tableCategory,
		 
		 

	}) => {
  const { checkPermission } = useAuth();
  const [selectedConfirmDeleteCategory, setSelectedConfirmDeleteCategory] = React.useState(null);
  const [showModalConfirmDeleteCategory, setShowModalConfirmDeleteCategory] = React.useState(false);
  
  const confirmDelete = async (selectedConfirmDeleteCategory) => {
      await deleteCategory({
        categoryId: selectedConfirmDeleteCategory.categoryId,
      });
  		window.location.reload();
    }
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[tableCategory]}
  	  itemsAttrs={[
          {
            id: "categoryName",
            condition: "",
            label: "Category Name",
            featureName: "name",
            editable: false
          }
  ]}
        itemsEvents={(categoryItem) => [
          checkPermission("DeleteCategory") &&  (
            <Link to=''>
              <Button
                id="_uivQ0PKUEe-L4bPmfdjtoA"
                size="sm"
                variant=
                            "secondary"
                onClick={() => {
                  setSelectedConfirmDeleteCategory(categoryItem);
                  setShowModalConfirmDeleteCategory(true);
                }}
              >
                Delete
              </Button>
            </Link>
            
          )
  ,
          checkPermission("UpdateCategory") &&  (
    <Link to={`/category/edit?categoryId=${categoryItem.categoryId}`}>
      <Button
        id="__FltMPKWEe-L4bPmfdjtoA"
        size="sm"
        variant=
                    "secondary"
      >
        Edit
      </Button>
    </Link>
    
  )
        ]}
  	/>
  		<Modal
  		isShow={showModalConfirmDeleteCategory}
  		title={"Confirm Delete Category"}
  		>
  		
  				<Link to=''><Button className={`w-full`} variant="tertiary" onClick={() => setShowModalConfirmDeleteCategory(false)}>Batal</Button></Link>
  		
  		<Button
  		  id="_CJk4EPKWEe-L4bPmfdjtoA"
  		  variant="primary"
  		  onClick={() => confirmDelete(selectedConfirmDeleteCategory)}
  		>
  		  Confirm
  		</Button>
  		</Modal>,
  </>
  )
};

export default CategoryTable;
