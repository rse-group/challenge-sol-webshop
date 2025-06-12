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
  FileInputField,
  
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import saveCatalog from '../services/saveCatalog'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddCatalogForm = ({ 
	categoryListData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const addCatalog = (data) => {
    const cleanData = cleanFormData(data)
    saveCatalog({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/catalog`)
  	notifySuccess(`Save Catalog berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Catalog Form" 
		  onSubmit={handleSubmit(addCatalog)}
	
	    vas={[
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
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="price"
	        name="price"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Price"
	          placeholder="Masukkan price"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="availableStock"
	        name="availableStock"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Available Stock"
	          placeholder="Masukkan available stock"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="pictureURL"
	        name="pictureURL"
	        control={control}
	        render={({ field, fieldState }) => (
	        <FileInputField
	          label="Image"
	          placeholder="Masukkan image"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
	
	      <Controller
	        key="categoryId"
	        name="categoryId"
	        control={control}
	        render={({ field, fieldState }) => (
	        <SelectionField
	          
	          label="Category"
	          options={categoryListData}
	          optionKey="categoryId"
	          optionLabel="name"
	          placeholder="Masukkan category"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
		    <Button id="_QlxwgMMCEe-RLeGDC5kypA" key="Add Catalog" type="submit" variant="primary">Add Catalog</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormAddCatalogForm
