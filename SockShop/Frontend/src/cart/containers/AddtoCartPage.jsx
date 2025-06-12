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
import { useSearchParams } from "react-router";
import { useAuth } from '@/commons/auth';
import FormAddtoCartForm from '../components/FormAddtoCartForm'
import getCatalogData from '../services/getCatalogData'

const AddtoCartPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	addtoCartForm: false,

  });
  const { setTitle } = useContext(HeaderContext);
  const { catalogId } = useParams();

  useEffect(() => {
    setTitle("Add to Cart Page")
  }, []);


const [catalogData, setCatalogData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, addtoCartForm: true}))
      const { data: catalogDataResponse } = await getCatalogData({ catalogId  })

	  setCatalogData(catalogDataResponse.data)
	  setIsLoading(prev => ({...prev, addtoCartForm: false}))
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
		singularName={"to"}
		isLoading={isLoading.addtoCartForm}
	>
		{catalogData ? 
		(<>
		 <FormAddtoCartForm
			{...{ 
				catalogData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddtoCartPage

