/*
	Generated on 31/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";

const OrderDetail = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "orderDate",
                  condition: "",
                  label: "Order Date",
                  featureName: "date",
                }
        ,        {
                  id: "status",
                  condition: "",
                  label: "Status",
                  featureName: "status",
                }
        ,        {
                  id: "totalPrice",
                  condition: "isCurrency",
                  label: "Total Price",
                  featureName: "amount",
                }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default OrderDetail;
