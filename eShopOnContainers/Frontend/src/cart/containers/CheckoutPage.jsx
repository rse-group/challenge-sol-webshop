/*
	Generated on 05/06/2025 by UI Generator PRICES-IDE
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
import FormCheckoutForm from '../components/FormCheckoutForm'
import getCheckoutDetailData from '../services/getCheckoutDetailData'
import getAddressListData from '../services/getAddressListData'

const CheckoutPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableCheckoutItems: false,
	checkoutForm: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Checkout Page")
  }, []);


const [checkoutItemListData, setCheckoutItemListData] = useState()

useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableCheckoutItems: true}))
				const { data: checkoutItemListData } = await getCheckoutItemListData()
				setCheckoutItemListData(checkoutItemListData.data)
			} finally {
				setIsLoading(prev => ({...prev, tableCheckoutItems: false}))
			}
		}
		fetchData()
  	}, [])
const [checkoutDetailData, setCheckoutDetailData] = useState()
  const [addressListData, setAddressListData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, checkoutForm: true}))
      const { data: checkoutDetailDataResponse } = await getCheckoutDetailData({  })
      const { data: addressListDataResponse } = await getAddressListData({  })

	  setCheckoutDetailData(checkoutDetailDataResponse.data)
	  setAddressListData(addressListDataResponse.data)
	  setIsLoading(prev => ({...prev, checkoutForm: false}))
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
		singularName={"Form"}
		isLoading={isLoading.checkoutForm}
	>
		{checkoutDetailData && addressListData ? 
		(<>
		 <FormCheckoutForm
			{...{ 
				checkoutDetailData
, 				addressListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default CheckoutPage

