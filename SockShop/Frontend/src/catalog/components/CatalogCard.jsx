/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const CatalogCard = ({ catalogListData,
		 

	}) => {
  const { checkPermission } = useAuth();
  const {  } = useParams()
  
  return (
    <Layouts.ListComponentCardLayout
      items={[catalogListData]}
  	
  	isSearchable
  	itemsAttrs={[
          {
            id: "pictureURL",
            condition: "",
            label: "pictureURL",
            featureName: "pictureURL",
            editable: false
          }
  ,        {
            id: "name",
            condition: "",
            label: "Name",
            featureName: "name",
            editable: false
          }
  ,        {
            id: "price",
            condition: "isCurrency",
            label: "Price",
            featureName: "price",
            editable: false
          }
  ]}
      itemsEvents={(catalogItem) => [
        <Link to={`/catalog/${catalogItem.catalogId}`}>
          <Button
            id="_AyuhqMIJEe-dLb7Rw-1j8g"
            size="sm"
            variant=
                "primary"
          >
            Detail
          </Button>
        </Link>
  	]}
    />
  )	
};

export default CatalogCard;
