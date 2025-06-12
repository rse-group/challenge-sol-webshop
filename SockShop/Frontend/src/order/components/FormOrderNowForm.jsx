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
import saveNowOrderItem from '../services/saveNowOrderItem'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormOrderNowForm = ({ 
	catalogData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: catalogData })
  
  
  
  
  const navigate = useNavigate()
  
  const next = (data) => {
    const cleanData = cleanFormData(data)
    saveNowOrderItem({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
  		const orderId = data?.[0]?.orderId;
		navigate(`/order-now/delivery?orderId=${orderId}`);

    })
    .catch((error) => {
    	console.error(error);
        notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Order Now Form" 
		  onSubmit={handleSubmit(next)}
	
	    vas={[
	      <VisualizationAttr
	        label="Product"
	        content={catalogData?.pictureURL}
	        
	      />
	,
	      <VisualizationAttr
	  label=""
	  content={catalogData?.name}
	  
	/>
	,
	      <VisualizationAttr
	  label=""
	  content={catalogData?.price}
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
	          defaultValue={catalogData.quantity}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
		  ]}
	
		  itemsEvents={[
		    <Button id="_uUYJsAhWEfC4o_wZMpdzoA" key="Place Order" type="submit" variant="primary">Next</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormOrderNowForm
