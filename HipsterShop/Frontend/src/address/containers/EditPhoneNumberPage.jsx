/*
	Generated on 31/05/2025 by UI Generator PRICES-IDE
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
import FormEditPhoneNumberForm from '../components/FormEditPhoneNumberForm'
import getPhoneNumberData from '../services/getPhoneNumberData'

const EditPhoneNumberPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	editPhoneNumberForm: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit Phone Number Page")
  }, []);


const [phoneNumberData, setPhoneNumberData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editPhoneNumberForm: true}))
      const { data: phoneNumberDataResponse } = await getPhoneNumberData({  })

	  setPhoneNumberData(phoneNumberDataResponse.data)
	  setIsLoading(prev => ({...prev, editPhoneNumberForm: false}))
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
		singularName={"Phone"}
		isLoading={isLoading.editPhoneNumberForm}
	>
		{phoneNumberData ? 
		(<>
		 <FormEditPhoneNumberForm
			{...{ 
				phoneNumberData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditPhoneNumberPage

