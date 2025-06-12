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
import HistoryTable from "../components/HistoryTable";
import getOrderHistoryData from '../services/getOrderHistoryData'

const OrderHistoryPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableHistory: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Order History Page")
  }, []);


const [orderHistoryData, setOrderHistoryData] = useState()

useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableHistory: true}))
				const { data: orderHistoryData } = await getOrderHistoryData()
				setOrderHistoryData(orderHistoryData.data)
			} finally {
				setIsLoading(prev => ({...prev, tableHistory: false}))
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
	title={"Table History"}
	singularName={"History"}
	items={[orderHistoryData]}
	isLoading={isLoading.tableHistory}
>
	<HistoryTable
		orderHistoryData={orderHistoryData}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default OrderHistoryPage

