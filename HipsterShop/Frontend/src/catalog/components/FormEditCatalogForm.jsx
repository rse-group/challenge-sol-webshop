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
import updateCatalog from '../services/updateCatalog'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormEditCatalogForm = ({ 
	editCatalogData
, 	categoryListData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: editCatalogData })
  
  
  
  
  const navigate = useNavigate()
  
  const saveCatalog = (data) => {
    const cleanData = cleanFormData(data)
    updateCatalog({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/catalog/${editCatalogData.catalogId}`)
  	notifySuccess(`Update Catalog berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit Catalog Form" 
		  onSubmit={handleSubmit(saveCatalog)}
	
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
	          defaultValue={editCatalogData.name}
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
	          defaultValue={editCatalogData.price}
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
	          defaultValue={editCatalogData.availableStock}
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
	          defaultValue={editCatalogData.description}
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
	          label="Picture"
	          placeholder="Masukkan picture"
	          defaultValue={editCatalogData.pictureURL}
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
	          defaultValue={editCatalogData.categoryId}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
		    <Button id="_d-YJUMMCEe-RLeGDC5kypA" key="Save Catalog" type="submit" variant="primary">Save Catalog</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormEditCatalogForm
