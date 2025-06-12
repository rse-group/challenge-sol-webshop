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
import updatePhoneNumberCustomer from '../services/updatePhoneNumberCustomer'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormEditPhoneNumberForm = ({ 
	phoneNumberData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const savePhoneNumber = (data) => {
    const cleanData = cleanFormData(data)
    updatePhoneNumberCustomer({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/profile`)
  	notifySuccess(`UpdatePhoneNumber Customer berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit Phone Number Form" 
		  onSubmit={handleSubmit(savePhoneNumber)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="phoneNumber"
	        name="phoneNumber"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Phone Number"
	          placeholder="Masukkan phone number"
            defaultValue={phoneNumberData.phoneNumber}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_6q2-sC4oEfCSTaP1qhtohA" key="Save Phone Number" type="submit" variant="primary">Save Phone Number</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormEditPhoneNumberForm
