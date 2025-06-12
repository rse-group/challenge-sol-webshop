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
import getOrderDetailData from '../services/getOrderDetailData'
import ItemsTable from "../components/ItemsTable";
import getOrderItemListData from '../services/getOrderItemListData'
import AddressDetail from '../components/AddressDetail'
import getAddressDetailData from '../services/getAddressDetailData'

const OrderDetailPage = props => {
  const { orderId, addressId } = useParams()
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	orderDetail: false,
	tableItems: false,
	addressDetail: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Order Detail Page")
  }, []);


const [orderDetailData, setOrderDetailData] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, orderDetail: true}))
				const { data: orderDetailData } = await getOrderDetailData({ orderId })
				setOrderDetailData(orderDetailData.data)
			} finally {
				setIsLoading(prev => ({...prev, orderDetail: false}))
			}
		}
		fetchData()
	}, [])
const [orderItemListData, setOrderItemListData] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableItems: true}))
				const { data: orderItemListData } = await getOrderItemListData({ orderId })
				setOrderItemListData(orderItemListData.data)
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
			  	<Link to={`/order
			  	`}>
			  		<Button id="_q2abICOLEfCdW_H1NywOIw" className="p-2 w-full" variant="primary">
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
	items={{...orderDetailData}}
	isLoading={isLoading.orderDetail}
	isCorrelatedWithAnotherComponent={false}
>
	<OrderDetail {...{ data : { ...orderDetailData }}} />
</Layouts.DetailContainerLayout>
<Layouts.ListContainerTableLayout
	title={"Table Items"}
	singularName={"Items"}
	items={[orderItemListData]}
	isLoading={isLoading.tableItems}
>
	<ItemsTable
		orderItemListData={orderItemListData}
		
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
export default OrderDetailPage

