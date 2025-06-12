/*
	Generated on 05/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const ItemsTable = ({ orderHistoryItemListData,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[orderHistoryItemListData]}
  	  itemsAttrs={[
          {
            id: "product",
            condition: "",
            label: "Product",
            featureName: "pictureURL",
            editable: false
          }
  ,        {
            id: "",
            condition: "",
            label: "",
            featureName: "name",
            editable: false
          }
  ,        {
            id: "unitPrice",
            condition: "isCurrency",
            label: "Unit Price",
            featureName: "price",
            editable: false
          }
  ,        {
            id: "quantity",
            condition: "",
            label: "Quantity",
            featureName: "quantity",
            editable: false
          }
  ,        {
            id: "subtotal",
            condition: "isCurrency",
            label: "Subtotal",
            featureName: "amount",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default ItemsTable;
