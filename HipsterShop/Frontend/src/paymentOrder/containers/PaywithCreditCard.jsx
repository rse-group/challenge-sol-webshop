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
import AddedFormPaymentForm from '../components/AddedFormPaymentForm'
import getOrderData from '../services/getOrderData'

const PaywithCreditCard = props => {
  const { orderId } = useParams()
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	paymentForm: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Pay with Credit Card")
  }, []);


const [orderData, setOrderData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, paymentForm: true}))
      const { data: orderDataResponse } = await getOrderData({ orderId  })

	  setOrderData(orderDataResponse.data)
	  setIsLoading(prev => ({...prev, paymentForm: false}))
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
		singularName={"Form"}
		isLoading={isLoading.paymentForm}
	>
		{orderData ? 
		(<>
		 <AddedFormPaymentForm
			{...{ 
				orderData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default PaywithCreditCard

