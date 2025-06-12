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

const AccountInformation = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const editPhoneNumber = async () => {
      navigate(
        '/profile/phone-number/edit?'
      );
    };
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "email",
                  condition: "",
                  label: "Email",
                  featureName: "email",
                }
        ,        {
                  id: "name",
                  condition: "",
                  label: "Name",
                  featureName: "name",
                }
        ,        {
                  id: "phoneNumber",
                  condition: "",
                  label: "Phone Number",
                  featureName: "phoneNumber",
                }
        
      ]}
      itemsEvents={[
          checkPermission("UpdatePhoneNumber") &&  (
          	<Button
          	  id="_LzdwUC4nEfCSTaP1qhtohA"
          	  variant="secondary"
          	  onClick={() => editPhoneNumber()}
          	>
          	  Edit Phone Number
          	</Button>
          )
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default AccountInformation;
