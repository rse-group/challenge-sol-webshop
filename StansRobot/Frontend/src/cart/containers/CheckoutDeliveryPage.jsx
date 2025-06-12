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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import SelfPickup from '../components/SelfPickup'
import getSelfPickupDetailData from '../services/getSelfPickupDetailData'

const CheckoutDeliveryPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableCheckoutItems: false,
	checkoutForm: false,
	selfPickup: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Checkout Delivery Page")
  }, []);


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableCheckoutItems: true}))
			} finally {
				setIsLoading(prev => ({...prev, tableCheckoutItems: false}))
			}
		}
		fetchData()
  	}, [])

const [selfPickupDetailData, setSelfPickupDetailData] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, selfPickup: true}))
				const { data: selfPickupDetailData } = await getSelfPickupDetailData({  })
				setSelfPickupDetailData(selfPickupDetailData.data)
			} finally {
				setIsLoading(prev => ({...prev, selfPickup: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Self Pickup"}
	singularName={"Pickup"}
	items={{...selfPickupDetailData}}
	isLoading={isLoading.selfPickup}
	isCorrelatedWithAnotherComponent={false}
>
	<SelfPickup {...{ data : { ...selfPickupDetailData }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default CheckoutDeliveryPage

