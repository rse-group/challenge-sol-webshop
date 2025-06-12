/*
	Generated on 05/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const SavedCard = ({ addressListData,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[addressListData]}
  	
  	itemsAttrs={[
          {
            id: "zIPCode",
            condition: "",
            label: "ZIP Code",
            featureName: "zipcode",
            editable: false
          }
  ,        {
            id: "street",
            condition: "",
            label: "Street",
            featureName: "street",
            editable: false
          }
  ,        {
            id: "city",
            condition: "",
            label: "City",
            featureName: "city",
            editable: false
          }
  ]}
      itemsEvents={(savedItem) => [
        <Link to={`/profile/address/${savedItem.addressId}`}>
          <Button
            id="_JnoGgAb5EfC7HK0qSFYGRw"
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

export default SavedCard;
