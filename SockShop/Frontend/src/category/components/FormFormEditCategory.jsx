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
import updateCategory from '../services/updateCategory'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormFormEditCategory = ({ 
	dataCategoryUpdate
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: dataCategoryUpdate })
  
  
  
  
  const navigate = useNavigate()
  
  const save = (data) => {
    const cleanData = cleanFormData(data)
    updateCategory({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      notifySuccess(`Update Category berhasil!`);
      navigate(`/category`)
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Form Edit Category" 
		  onSubmit={handleSubmit(save)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="name"
	        name="name"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Category Name"
	          placeholder="Masukkan category name"
	          defaultValue={dataCategoryUpdate.name}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_d3xF4ObvEe-QSIHLMQfY6A" key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormFormEditCategory
