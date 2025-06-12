/*
	Generated on 31/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React from "react";
import { useNavigate, useSearchParams } from "react-router";
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
import saveSelfPickup from '../services/saveSelfPickup'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const AddedFormSelfPickupForm = ({ 
	orderItemData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: orderItemData })
  
  
  
  
  const navigate = useNavigate()
  
  const placeOrder = (data) => {
    const cleanData = cleanFormData(data)
    saveSelfPickup({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/order-history`)
  	notifySuccess(`Save SelfPickup berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Self Pickup Form" 
		  onSubmit={handleSubmit(placeOrder)}
	
	    vas={[
	      <VisualizationAttr
	        label="Product"
	        content={orderItemData?.pictureURL}
	        
	      />
	,
	      <VisualizationAttr
	  label=""
	  content={orderItemData?.name}
	  
	/>
	,
	      <VisualizationAttr
	  label=""
	  content={orderItemData?.price}
	  isCurrency
	/>
	,
	      <VisualizationAttr
	  label="Quantity"
	  content={orderItemData?.quantity}
	  
	/>
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="pickupTime"
	        name="pickupTime"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Pickup Time"
	          placeholder="Masukkan pickup time"
	          type="date"
	          defaultValue={orderItemData.pickupTime}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_GbnKwCvKEfCeE7iSSWm4RA" key="Place Order" type="submit" variant="primary">Place Order</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default AddedFormSelfPickupForm
