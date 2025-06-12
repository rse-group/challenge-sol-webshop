/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';
import saveOrderItem from '../services/saveOrderItem'
import * as Layouts from "@/commons/layouts";

const SelfPickup = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const choose = async () => {
      const result = await saveOrderItem({});
      const orderId = result?.data?.data?.[0]?.orderId;

      if (orderId) {
        navigate(`/cart/checkout/delivery/self-pickup?orderId=${orderId}`);
      } else {
        console.error('Order ID not returned from saveOrderItem');
      }

    }
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "",
                  condition: "",
                  label: "",
                  featureName: "description",
                }
        
      ]}
      itemsEvents={[
          <Button
            id="_NSpVMC5VEfCSTaP1qhtohA"
            variant="secondary"
            onClick={() => choose()}
          >
            Choose
          </Button>
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default SelfPickup;
