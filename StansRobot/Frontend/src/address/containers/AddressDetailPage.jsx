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
import { useAuth } from '@/commons/auth';
import AddressDetail from '../components/AddressDetail'
import getAddressDetailData from '../services/getAddressDetailData'

const AddressDetailPage = props => {
  const { addressId } = useParams()
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	addressDetail: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Address Detail Page")
  }, []);


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
			<></>
			</>
		}
	>
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
export default AddressDetailPage

