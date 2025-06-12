/*
	Generated on 05/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button, Modal } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

import deleteCityOnly from '../services/deleteCityOnly'

const SavedCard = ({ addressListData,
		 

	}) => {
  const { checkPermission } = useAuth();

  const [selectedConfirmDeleteAddress, setSelectedConfirmDeleteAddress] = React.useState(null);
  const [showModalConfirmDeleteAddress, setShowModalConfirmDeleteAddress] = React.useState(false);

  const confirmDelete = async (selectedConfirmDeleteAddress) => {
    await deleteCityOnly({
      addressId: selectedConfirmDeleteAddress.addressId,
    });
    window.location.reload()
  };
  
  return (
    <>
      <Layouts.ListComponentTableLayout
        items={[addressListData]}
        itemsAttrs={[
          {
            id: "city",
            condition: "",
            label: "City",
            featureName: "city",
            editable: false
          }
        ]}
        itemsEvents={(savedItem) => [
          checkPermission("UpdateAddress") &&  (
            <Link to={`/profile/address/edit?addressId=${savedItem.addressId}`}>
              <Button
                id="_wm-ZUAekEfCOVew4wI5gAA"
                size="sm"
                variant="secondary"
              >
                Edit
              </Button>
            </Link>
          )
          ,
          checkPermission("DeleteAddress") &&  (
            <Link to=''>
              <Button
                id="_yF2LEAekEfCOVew4wI5gAA"
                size="sm"
                variant="secondary"
                onClick={() => {
                  setSelectedConfirmDeleteAddress(savedItem);
                  setShowModalConfirmDeleteAddress(true);
                }}
              >
                Delete
              </Button>
            </Link>      
          )
        ]}
      />
          <Modal
            isShow={showModalConfirmDeleteAddress}
            title={"Confirm Delete Address"}
          >
            <Link to=''><Button className={`w-full`} variant="tertiary" onClick={() => setShowModalConfirmDeleteAddress(false)}>Batal</Button></Link>
            <Button
              id="_MUF5QAeoEfCOVew4wI5gAA"
              variant="primary"
              onClick={() => confirmDelete(selectedConfirmDeleteAddress)}
            >
              Confirm Delete
            </Button>
          </Modal>
      </>
  )	
};

export default SavedCard;
