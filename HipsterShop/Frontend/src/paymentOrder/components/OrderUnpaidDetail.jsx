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

const OrderUnpaidDetail = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "orderID",
                  condition: "",
                  label: "Order ID",
                  featureName: "orderId",
                }
        ,        {
                  id: "orderDate",
                  condition: "",
                  label: "Order Date",
                  featureName: "date",
                }
        ,        {
                  id: "totalPrice",
                  condition: "isCurrency",
                  label: "Total Price",
                  featureName: "amount",
                }
        ,        {
                  id: "status",
                  condition: "",
                  label: "Status",
                  featureName: "status",
                }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default OrderUnpaidDetail;
