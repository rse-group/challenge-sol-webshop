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
import FormEditCartItemForm from '../components/FormEditCartItemForm'
import getCartItemEditData from '../services/getCartItemEditData'

const EditCartItemPage = props => {
  const { cartItemId } = useParams()
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	editCartItemForm: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit Cart Item Page")
  }, []);


const [cartItemEditData, setCartItemEditData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editCartItemForm: true}))
      const { data: cartItemEditDataResponse } = await getCartItemEditData({ cartItemId  })

	  setCartItemEditData(cartItemEditDataResponse.data)
	  setIsLoading(prev => ({...prev, editCartItemForm: false}))
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
		singularName={"Cart"}
		isLoading={isLoading.editCartItemForm}
	>
		{cartItemEditData ? 
		(<>
		 <FormEditCartItemForm
			{...{ 
				cartItemEditData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditCartItemPage

