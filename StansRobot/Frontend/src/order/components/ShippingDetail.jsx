/*
	Generated on 05/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";

const ShippingDetail = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "courier",
                  condition: "",
                  label: "Courier",
                  featureName: "courier",
                }
        ,        {
                  id: "service",
                  condition: "",
                  label: "Service",
                  featureName: "service",
                }
        ,        {
                  id: "type",
                  condition: "",
                  label: "Type",
                  featureName: "type",
                }
        ,        {
                  id: "cost",
                  condition: "isCurrency",
                  label: "Cost",
                  featureName: "shippingCost",
                }
        ,        {
                  id: "estimation",
                  condition: "",
                  label: "Estimation",
                  featureName: "estimation",
                }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default ShippingDetail;
