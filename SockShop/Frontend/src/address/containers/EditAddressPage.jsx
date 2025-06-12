/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import { useAuth } from '@/commons/auth';
import FormEditAddressForm from '../components/FormEditAddressForm'
import getEditAddressData from '../services/getEditAddressData'

const EditAddressPage = props => {
  const { addressId } = useParams()
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	editAddressForm: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit Address Page")
  }, []);


const [editAddressData, setEditAddressData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editAddressForm: true}))
      const { data: editAddressDataResponse } = await getEditAddressData({ addressId  })

	  setEditAddressData(editAddressDataResponse.data)
	  setIsLoading(prev => ({...prev, editAddressForm: false}))
    }
	fetch()
  }, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Address"}
		isLoading={isLoading.editAddressForm}
	>
		{editAddressData ? 
		(<>
		 <FormEditAddressForm
			{...{ 
				editAddressData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditAddressPage

