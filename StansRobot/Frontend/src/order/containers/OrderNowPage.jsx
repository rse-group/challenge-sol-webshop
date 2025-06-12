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
import { useSearchParams } from "react-router";
import { useAuth } from '@/commons/auth';
import FormOrderNowForm from '../components/FormOrderNowForm'
import getCatalogData from '../services/getCatalogData'
import getAddressListData from '../services/getAddressListData'

const OrderNowPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	orderNowForm: false,

  });
  const { setTitle } = useContext(HeaderContext);
  const { catalogId } = useParams();

  useEffect(() => {
    setTitle("Order Now Page")
  }, []);


const [catalogData, setCatalogData] = useState()
  const [addressListData, setAddressListData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, orderNowForm: true}))
      const { data: catalogDataResponse } = await getCatalogData({ catalogId  })
      const { data: addressListDataResponse } = await getAddressListData({ catalogId  })

	  setCatalogData(catalogDataResponse.data)
	  setAddressListData(addressListDataResponse.data)
	  setIsLoading(prev => ({...prev, orderNowForm: false}))
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
		singularName={"Now"}
		isLoading={isLoading.orderNowForm}
	>
		{catalogData && addressListData ? 
		(<>
		 <FormOrderNowForm
			{...{ 
				catalogData
, 				addressListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default OrderNowPage

