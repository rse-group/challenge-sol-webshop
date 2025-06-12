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
import ItemsTable from "../components/ItemsTable";
import getOrderUnpaidItemListData from '../services/getOrderUnpaidItemListData'
import OrderUnpaidDetail from '../components/OrderUnpaidDetail'
import getOrderUnpaidDetailData from '../services/getOrderUnpaidDetailData'

const OrderDetailPage = props => {
  const { orderId } = useParams()
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableItems: false,
	orderUnpaidDetail: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Order Detail Page")
  }, []);


const [orderUnpaidItemListData, setOrderUnpaidItemListData] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableItems: true}))
				const { data: orderUnpaidItemListData } = await getOrderUnpaidItemListData({ orderId })
				setOrderUnpaidItemListData(orderUnpaidItemListData.data)
			} finally {
				setIsLoading(prev => ({...prev, tableItems: false}))
			}
		}
		fetchData()
  	}, [])
const [orderUnpaidDetailData, setOrderUnpaidDetailData] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, orderUnpaidDetail: true}))
				const { data: orderUnpaidDetailData } = await getOrderUnpaidDetailData({ orderId })
				setOrderUnpaidDetailData(orderUnpaidDetailData.data)
			} finally {
				setIsLoading(prev => ({...prev, orderUnpaidDetail: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/payment
			  	`}>
			  		<Button id="_g3sOIDBCEfCGjbY9PYx7KA" className="p-2 w-full" variant="primary">
			  		  Back
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Items "}
	singularName={"Items"}
	items={[orderUnpaidItemListData]}
	isLoading={isLoading.tableItems}
>
	<ItemsTable
		orderUnpaidItemListData={orderUnpaidItemListData}
		
	/>
</Layouts.ListContainerTableLayout>
<Layouts.DetailContainerLayout
	title={"Order Unpaid Detail"}
	singularName={"Unpaid"}
	items={{...orderUnpaidDetailData}}
	isLoading={isLoading.orderUnpaidDetail}
	isCorrelatedWithAnotherComponent={false}
>
	<OrderUnpaidDetail {...{ data : { ...orderUnpaidDetailData }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default OrderDetailPage

