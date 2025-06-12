/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';
import { useParams } from "@/commons/hooks/useParams"

import * as Layouts from "@/commons/layouts";

const SelfPickup = ({ data }) => {
    const { checkPermission } = useAuth();
    const { orderId } = useParams();
    const navigate = useNavigate();
    const choose = async () => {
      navigate(
        '/order-now/delivery/self-pickup?'
        + `orderId=${orderId}`
        
      );
    };
  
  
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
            id="_uYQFMCsVEfCNJNTilCFGlA"
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
