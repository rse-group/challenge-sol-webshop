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
import OrderTable from "../components/OrderTable";
import getOrderUnpaidData from '../services/getOrderUnpaidData'

const PaymentPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableOrderUnpaid: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Payment Page")
  }, []);


const [orderUnpaidData, setOrderUnpaidData] = useState()

useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableOrderUnpaid: true}))
				const { data: orderUnpaidData } = await getOrderUnpaidData()
				setOrderUnpaidData(orderUnpaidData.data)
			} finally {
				setIsLoading(prev => ({...prev, tableOrderUnpaid: false}))
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
<Layouts.ListContainerTableLayout
	title={"Table Order Unpaid"}
	singularName={"Order"}
	items={[orderUnpaidData]}
	isLoading={isLoading.tableOrderUnpaid}
>
	<OrderTable
		orderUnpaidData={orderUnpaidData}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default PaymentPage

