/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
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
import updateCartItem from '../services/updateCartItem'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormEditCartItemForm = ({ 
	cartItemEditData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: cartItemEditData })
  
  
  
  
  const navigate = useNavigate()
  
  const save = (data) => {
    const cleanData = cleanFormData(data)
    updateCartItem({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/cart`)
  	notifySuccess(`Update Cart Item berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit Cart Item Form" 
		  onSubmit={handleSubmit(save)}
	
	    vas={[
	      <VisualizationAttr
	        label="Product"
	        content={cartItemEditData?.pictureURL}
	        
	      />
	,
	      <VisualizationAttr
	  label=""
	  content={cartItemEditData?.name}
	  
	/>
	,
	      <VisualizationAttr
	  label=""
	  content={cartItemEditData?.price}
	  isCurrency
	/>
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="quantity"
	        name="quantity"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Quantity"
	          placeholder="Masukkan quantity"
	          type="number"
	          defaultValue={cartItemEditData.quantity}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_BHGlMOxFEe-Bw4Gtm2pZBg" key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormEditCartItemForm
