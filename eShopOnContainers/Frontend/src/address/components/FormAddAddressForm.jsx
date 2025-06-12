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
import saveAddress from '../services/saveAddress'
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
    saveAddress({
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
	        key="zipcode"
	        name="zipcode"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="ZIP Code"
	          placeholder="Masukkan zip code"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="street"
	        name="street"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Street"
	          placeholder="Masukkan street"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="subdistrict"
	        name="subdistrict"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Subdistrict"
	          placeholder="Masukkan subdistrict"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="district"
	        name="district"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="District"
	          placeholder="Masukkan district"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
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
	
	,
	      <Controller
	        key="province"
	        name="province"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Province"
	          placeholder="Masukkan province"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_CM6kcAclEfC7HK0qSFYGRw" key="Add Address" type="submit" variant="primary">Add Address</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormAddAddressForm
