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
import saveOrderItem from '../services/saveOrderItem'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormCheckoutForm = ({ 
	checkoutDetailData
, 	addressListData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const placeOrder = (data) => {
    const cleanData = cleanFormData(data)
    saveOrderItem({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/cart`)
  	notifySuccess(`Save OrderItem berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Checkout Form" 
		  onSubmit={handleSubmit(placeOrder)}
	
	    vas={[
	      <VisualizationAttr
	        label="Total Price"
	        content={checkoutDetailData?.amount}
	        isCurrency
	      />
		  ]}
	
		  formFields={[
		  
	
	
	      <Controller
	        key="addressId"
	        name="addressId"
	        control={control}
	        render={({ field, fieldState }) => (
	        <SelectionField
	          
	          label="Address"
	          options={addressListData}
	          optionKey="addressId"
	          optionLabel="street"
	          placeholder="Masukkan address"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
		    <Button id="_syutMAgIEfCQNZz45yZkBw" key="Place Order" type="submit" variant="primary">Place Order</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormCheckoutForm
