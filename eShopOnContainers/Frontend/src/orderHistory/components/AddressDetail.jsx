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

const AddressDetail = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "zIPCode",
                  condition: "",
                  label: "ZIP Code",
                  featureName: "zipcode",
                }
        ,        {
                  id: "street",
                  condition: "",
                  label: "Street",
                  featureName: "street",
                }
        ,        {
                  id: "subdistrict",
                  condition: "",
                  label: "Subdistrict",
                  featureName: "subdistrict",
                }
        ,        {
                  id: "district",
                  condition: "",
                  label: "District",
                  featureName: "district",
                }
        ,        {
                  id: "city",
                  condition: "",
                  label: "City",
                  featureName: "city",
                }
        ,        {
                  id: "province",
                  condition: "",
                  label: "Province",
                  featureName: "province",
                }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default AddressDetail;
