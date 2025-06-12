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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import CheckoutTable from "../components/CheckoutTable";
import getCheckoutItemListData from '../services/getCheckoutItemListData'
import AddedFormSelfPickupForm from '../components/AddedFormSelfPickupForm'
import getCheckoutDetailData from '../services/getCheckoutDetailData'

const SelfPickupPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableCheckoutItems: false,
	selfPickupForm: false,

  });
  const { setTitle } = useContext(HeaderContext);
  const { orderId } = useParams();
  
  useEffect(() => {
    setTitle("Self Pickup Page")
  }, []);


const [checkoutItemListData, setCheckoutItemListData] = useState()

useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableCheckoutItems: true}))
				const { data: checkoutItemListData } = await getCheckoutItemListData({ orderId })
				setCheckoutItemListData(checkoutItemListData.data)
			} finally {
				setIsLoading(prev => ({...prev, tableCheckoutItems: false}))
			}
		}
		fetchData()
  	}, [])
const [checkoutDetailData, setCheckoutDetailData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, selfPickupForm: true}))
      const { data: checkoutDetailDataResponse } = await getCheckoutDetailData({ orderId  })

	  setCheckoutDetailData(checkoutDetailDataResponse.data)
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
<Layouts.ListContainerTableLayout
	title={"Table Checkout Items"}
	singularName={"Checkout"}
	items={[checkoutItemListData]}
	isLoading={isLoading.tableCheckoutItems}
>
	<CheckoutTable
		checkoutItemListData={checkoutItemListData}
		
	/>
</Layouts.ListContainerTableLayout>
<Layouts.FormContainerLayout
		singularName={"Pickup"}
		isLoading={isLoading.selfPickupForm}
	>
		{checkoutDetailData ? 
		(<>
		 <AddedFormSelfPickupForm
			{...{ 
				checkoutDetailData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default SelfPickupPage

