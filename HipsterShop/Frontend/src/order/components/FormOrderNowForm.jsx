/*
	Generated on 31/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router";
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
import saveNowOrderItem from '../services/saveNowOrderItem'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormOrderNowForm = ({ 
	catalogData
, 	addressListData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: catalogData })
  
  const navigate = useNavigate()
  
  const placeOrder = (data) => {
    const cleanData = cleanFormData(data)
    saveNowOrderItem({
      ...cleanData,
	  catalogId: catalogData.catalogId,
    })
    .then(({ data: { data } }) => {
  		notifySuccess(`SaveNow OrderItem berhasil!`);
		navigate(`/catalog/${catalogData.catalogId}`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Order Now Form" 
		  onSubmit={handleSubmit(placeOrder)}
	
	    vas={[
	      <VisualizationAttr
	        label="Product"
	        content={catalogData?.pictureURL}
	        
	      />
	,
	      <VisualizationAttr
	  label=""
	  content={catalogData?.name}
	  
	/>
	,
	      <VisualizationAttr
	  label=""
	  content={catalogData?.price}
	  isCurrency
	/>
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="quantity"
	        name="quantity"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Quantity"
	          placeholder="Masukkan quantity"
	          defaultValue={catalogData.quantity}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="zipcode"
	        name="zipcode"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="ZIP Code"
	          placeholder="Masukkan zip code"
	          defaultValue={catalogData.zipcode}
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
	          defaultValue={catalogData.street}
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
	          defaultValue={catalogData.subdistrict}
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
	          defaultValue={catalogData.district}
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
	          defaultValue={catalogData.city}
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
	          defaultValue={catalogData.province}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="email"
	        name="email"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Email"
	          placeholder="Masukkan email"
	          defaultValue={catalogData.email}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
	
	      <Controller
	        key="addressId"
	        name="addressId"
	        control={control}
	        render={({ field, fieldState }) => (
	        <SelectionField
	          
	          label="Shipping Address"
	          options={addressListData}
	          optionKey="addressId"
	          optionLabel="street"
	          placeholder="Masukkan shipping address"
	          fieldState={fieldState}
	          defaultValue={catalogData.addressId}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
		    <Button id="_uUYJsAhWEfC4o_wZMpdzoA" key="Place Order" type="submit" variant="primary">Place Order</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormOrderNowForm
