/*
	Generated on 05/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';


import deleteAddress from '../services/deleteCityOnly'
import * as Layouts from "@/commons/layouts";

const AddressDetail = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalConfirmDeleteAddress, setShowModalConfirmDeleteAddress] = React.useState(false); 
    const edit = async () => {
      navigate(
        '/profile/address/edit?'
        + `addressId=${data.addressId}`
        
      );
    };
  
    const confirmDelete = async () => {
      await deleteAddress({
        addressId: data.addressId,
      });
      navigate('/profile');
    };
  
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
          checkPermission("UpdateAddress") &&  (
          	<Button
          	  id="_wm-ZUAekEfCOVew4wI5gAA"
          	  variant="secondary"
          	  onClick={() => edit()}
          	>
          	  Edit
          	</Button>
          )
        ,
          checkPermission("DeleteAddress") &&  (
        	<Button
        	  id="_yF2LEAekEfCOVew4wI5gAA"
        	  variant="secondary"
        	  onClick={() => setShowModalConfirmDeleteAddress(true)}
        	>
        	  Delete
        	</Button>
        )
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalConfirmDeleteAddress}
           title={"Confirm Delete Address"}
        >
           <Link to=''><Button variant="tertiary" onClick={() => setShowModalConfirmDeleteAddress(false)}>Batal</Button></Link>
          <Button
            id="_MUF5QAeoEfCOVew4wI5gAA"
            variant="secondary"
            onClick={() => confirmDelete()}
          >
            Confirm Delete
          </Button>
        </Modal>,
        
      ]}
    />
  );
};

export default AddressDetail;
