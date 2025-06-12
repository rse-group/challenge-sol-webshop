/*
	Generated on 05/06/2025 by UI Generator PRICES-IDE
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
import saveCartItem from '../services/saveCartItem'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddtoCartForm = ({ 
	catalogData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: catalogData })
  
  
  
  
  const navigate = useNavigate()
  
  const addtoCart = (data) => {
    const cleanData = cleanFormData(data)
    saveCartItem({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/catalog/${catalogData.catalogId}`)
  	notifySuccess(`Save CartItem berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add to Cart Form" 
		  onSubmit={handleSubmit(addtoCart)}
	
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
	          type="number"
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
		    <Button id="_Jh9wIOwuEe-Bw4Gtm2pZBg" key="Add to Cart" type="submit" variant="primary">Add to Cart</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormAddtoCartForm
