/*
	Generated on 04/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Modal,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  RadioInputField,
  TextAreaField,
  RichTextField,
  VisualizationAttr,
  Spinner,
  
  
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import cancelOrder from '../services/cancelOrder'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const AddedFormCancelOrderForm = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  const { orderId, addressId } = useParams();
  
  
  const navigate = useNavigate()
  
  const confirmCancel = (data) => {
    const cleanData = cleanFormData(data)
    cancelOrder({
      ...cleanData,
      orderId: orderId
    })
    .then(({ data: { data } }) => {
     navigate(`/order-history/${orderId}?addressId=${addressId}`)
  	notifySuccess(`Cancel Order berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Cancel Order Form" 
		  onSubmit={handleSubmit(confirmCancel)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="message"
	        name="message"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Message"
	          placeholder="Masukkan message"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_2vxHYCOOEfCdW_H1NywOIw" key="Confirm Cancel" type="submit" variant="primary">Confirm Cancel</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default AddedFormCancelOrderForm
