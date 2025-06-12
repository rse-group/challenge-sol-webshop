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
import saveCityOnly from '../services/saveCityOnly'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddAddressForm = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const addAddress = (data) => {
    const cleanData = cleanFormData(data)
    saveCityOnly({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/profile`)
  	notifySuccess(`Save Address berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Address Form" 
		  onSubmit={handleSubmit(addAddress)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="city"
	        name="city"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="City"
	          placeholder="Masukkan city"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_CM6kcAclEfC7HK0qSFYGRw" key="Add Address" type="submit" variant="primary">Add Address</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormAddAddressForm
