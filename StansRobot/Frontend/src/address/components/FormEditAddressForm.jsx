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
import updateCityOnly from '../services/updateCityOnly'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormEditAddressForm = ({ 
	editAddressData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: editAddressData })
  
  
  
  
  const navigate = useNavigate()
  
  const saveAddress = (data) => {
    const cleanData = cleanFormData(data)
    updateCityOnly({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/profile`)
  	notifySuccess(`Update Address berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit Address Form" 
		  onSubmit={handleSubmit(saveAddress)}
	
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
	          defaultValue={editAddressData.city}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_gMpf4AcrEfC7HK0qSFYGRw" key="Save Address" type="submit" variant="primary">Save Address</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormEditAddressForm
