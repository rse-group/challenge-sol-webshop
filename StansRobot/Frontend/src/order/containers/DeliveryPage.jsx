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
import { useAuth } from '@/commons/auth';
import SelfPickup from '../components/SelfPickup'
import getSelfPickupDetailData from '../services/getSelfPickupDetailData'

const DeliveryPage = props => {
  const { orderId } = useParams()
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	selfPickup: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Delivery Page")
  }, []);


const [selfPickupDetailData, setSelfPickupDetailData] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, selfPickup: true}))
				const { data: selfPickupDetailData } = await getSelfPickupDetailData({ orderId })
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
export default DeliveryPage

