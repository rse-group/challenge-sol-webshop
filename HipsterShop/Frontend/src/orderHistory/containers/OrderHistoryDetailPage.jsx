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
import OrderDetail from '../components/OrderDetail'
import getOrderHistoryDetailData from '../services/getOrderHistoryDetailData'
import ItemsTable from "../components/ItemsTable";
import getOrderHistoryItemListData from '../services/getOrderHistoryItemListData'
import AddressDetail from '../components/AddressDetail'
import getAddressDetailData from '../services/getAddressDetailData'

const OrderHistoryDetailPage = props => {
  const { orderId, addressId } = useParams()
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	orderDetail: false,
	tableItems: false,
	addressDetail: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Order History Detail Page")
  }, []);


const [orderHistoryDetailData, setOrderHistoryDetailData] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, orderDetail: true}))
				const { data: orderHistoryDetailData } = await getOrderHistoryDetailData({ orderId, addressId })
				setOrderHistoryDetailData(orderHistoryDetailData.data)
			} finally {
				setIsLoading(prev => ({...prev, orderDetail: false}))
			}
		}
		fetchData()
	}, [addressId])
const [orderHistoryItemListData, setOrderHistoryItemListData] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableItems: true}))
				const { data: orderHistoryItemListData } = await getOrderHistoryItemListData({ orderId })
				setOrderHistoryItemListData(orderHistoryItemListData.data)
			} finally {
				setIsLoading(prev => ({...prev, tableItems: false}))
			}
		}
		fetchData()
  	}, [])
const [addressDetailData, setAddressDetailData] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, addressDetail: true}))
				const { data: addressDetailData } = await getAddressDetailData({ addressId })
				setAddressDetailData(addressDetailData.data)
			} finally {
				setIsLoading(prev => ({...prev, addressDetail: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/order-history
			  	`}>
			  		<Button id="_g04r0COLEfCdW_H1NywOIw" className="p-2 w-full" variant="primary">
			  		  Back
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Order Detail"}
	singularName={"Detail"}
	items={{...orderHistoryDetailData}}
	isLoading={isLoading.orderDetail}
	isCorrelatedWithAnotherComponent={false}
>
	<OrderDetail {...{ data : { ...orderHistoryDetailData }}} />
</Layouts.DetailContainerLayout>
<Layouts.ListContainerTableLayout
	title={"Table Items"}
	singularName={"Items"}
	items={[orderHistoryItemListData]}
	isLoading={isLoading.tableItems}
>
	<ItemsTable
		orderHistoryItemListData={orderHistoryItemListData}
		
	/>
</Layouts.ListContainerTableLayout>
<Layouts.DetailContainerLayout
	title={"Address Detail"}
	singularName={"Detail"}
	items={{...addressDetailData}}
	isLoading={isLoading.addressDetail}
	isCorrelatedWithAnotherComponent={false}
>
	<AddressDetail {...{ data : { ...addressDetailData }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default OrderHistoryDetailPage

