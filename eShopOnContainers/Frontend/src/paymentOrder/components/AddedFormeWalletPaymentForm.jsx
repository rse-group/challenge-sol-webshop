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
import eWalletPaymentOrder from '../services/eWalletPaymentOrder'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const AddedFormeWalletPaymentForm = ({ 
	orderData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: orderData })
  
  
  
  
  const navigate = useNavigate()
  
  const pay = (data) => {
    const cleanData = cleanFormData(data)
    eWalletPaymentOrder({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/payment`)
  	notifySuccess(`EWallet PaymentOrder berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="eWallet Payment Form" 
		  onSubmit={handleSubmit(pay)}
	
	    vas={[
	      <VisualizationAttr
	        label="Order ID"
	        content={orderData?.orderId}
	        
	      />
	,
	      <VisualizationAttr
	  label="Total Price"
	  content={orderData?.amount}
	  
	/>
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="name"
	        name="name"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Name"
	          placeholder="Masukkan name"
	          defaultValue={orderData.name}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="phone"
	        name="phone"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Phone Number"
	          placeholder="Masukkan phone number"
	          defaultValue={orderData.phone}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="description"
	        name="description"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Description"
	          placeholder="Masukkan description"
	          defaultValue={orderData.description}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_Rit58DnfEfC48dUZQ8AMKg" key="Pay" type="submit" variant="primary">Pay</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default AddedFormeWalletPaymentForm
