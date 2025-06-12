/*
	Generated on 04/06/2025 by UI Generator PRICES-IDE
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
import AddedFormCancelOrderForm from '../components/AddedFormCancelOrderForm'

const CancelOrderPage = props => {
  const { orderId, addressId } = useParams()
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	cancelOrderForm: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Cancel Order Page")
  }, []);


useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, cancelOrderForm: true}))
	  setIsLoading(prev => ({...prev, cancelOrderForm: false}))
    }
	fetch()
  }, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/order-history/${orderId}?addressId=${addressId}`}>
			  		<Button id="_BbkiwCOPEfCdW_H1NywOIw" className="p-2" variant="primary">
			  		  Back
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Order"}
		isLoading={isLoading.cancelOrderForm}
	>
		<AddedFormCancelOrderForm
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default CancelOrderPage

