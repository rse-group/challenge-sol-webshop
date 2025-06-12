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
import AddedFormSelfPickupForm from '../components/AddedFormSelfPickupForm'
import getOrderItemData from '../services/getOrderItemData'

const SelfPickupPage = props => {
  const { orderId } = useParams()
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	selfPickupForm: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Self Pickup Page")
  }, []);


const [orderItemData, setOrderItemData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, selfPickupForm: true}))
      const { data: orderItemDataResponse } = await getOrderItemData({ orderId  })

	  setOrderItemData(orderItemDataResponse.data?.[0])
	  setIsLoading(prev => ({...prev, selfPickupForm: false}))
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
		singularName={"Pickup"}
		isLoading={isLoading.selfPickupForm}
	>
		{orderItemData ? 
		(<>
		 <AddedFormSelfPickupForm
			{...{ 
				orderItemData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default SelfPickupPage

