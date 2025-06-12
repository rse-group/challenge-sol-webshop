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
import creditCardPaymentOrder from '../services/creditCardPaymentOrder'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const AddedFormCreditCardPaymentForm = ({ 
	orderData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: orderData })
  
  
  
  
  const navigate = useNavigate()
  
  const pay = (data) => {
    const cleanData = cleanFormData(data)
    creditCardPaymentOrder({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/payment`)
  	notifySuccess(`CreditCard PaymentOrder berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Credit Card Payment Form" 
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
	        key="cardNumber"
	        name="cardNumber"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Card Number"
	          placeholder="Masukkan card number"
	          defaultValue={orderData.cardNumber}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="cardExpMonth"
	        name="cardExpMonth"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Card Expired Month"
	          placeholder="Masukkan card expired month"
	          defaultValue={orderData.cardExpMonth}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="cardExpYear"
	        name="cardExpYear"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Card Expired Year"
	          placeholder="Masukkan card expired year"
	          defaultValue={orderData.cardExpYear}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="cardCvv"
	        name="cardCvv"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Card CVV"
	          placeholder="Masukkan card cvv"
	          defaultValue={orderData.cardCvv}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_c3cmgDugEfC2e9juruB9-Q" key="Pay" type="submit" variant="primary">Pay</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default AddedFormCreditCardPaymentForm
