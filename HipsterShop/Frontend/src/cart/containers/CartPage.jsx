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
import CartTable from "../components/CartTable";
import getCartItemListData from '../services/getCartItemListData'
import CartSummary from '../components/CartSummary'
import getCartDetailData from '../services/getCartDetailData'

const CartPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableCartItems: false,
	cartSummary: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Cart Page")
  }, []);


const [cartItemListData, setCartItemListData] = useState()

useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableCartItems: true}))
				const { data: cartItemListData } = await getCartItemListData()
				setCartItemListData(cartItemListData.data)
			} finally {
				setIsLoading(prev => ({...prev, tableCartItems: false}))
			}
		}
		fetchData()
  	}, [])
const [cartDetailData, setCartDetailData] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, cartSummary: true}))
				const { data: cartDetailData } = await getCartDetailData({  })
				setCartDetailData(cartDetailData.data)
			} finally {
				setIsLoading(prev => ({...prev, cartSummary: false}))
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
	title={"Table Cart Items"}
	singularName={"Cart"}
	items={[cartItemListData]}
	isLoading={isLoading.tableCartItems}
>
	<CartTable
		cartItemListData={cartItemListData}
		
	/>
</Layouts.ListContainerTableLayout>
<Layouts.DetailContainerLayout
	title={"Cart Summary"}
	singularName={"Summary"}
	items={{...cartDetailData}}
	isLoading={isLoading.cartSummary}
	isCorrelatedWithAnotherComponent={false}
>
	<CartSummary {...{ data : { ...cartDetailData }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default CartPage

