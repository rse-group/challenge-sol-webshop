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
import { useSearchParams } from "react-router";
import { useAuth } from '@/commons/auth';
import FormAddCatalogForm from '../components/FormAddCatalogForm'
import getCategoryListData from '../services/getCategoryListData'

const AddCatalogPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	addCatalogForm: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add Catalog Page")
  }, []);


const [categoryListData, setCategoryListData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, addCatalogForm: true}))
      const { data: categoryListDataResponse } = await getCategoryListData({  })

	  setCategoryListData(categoryListDataResponse.data)
	  setIsLoading(prev => ({...prev, addCatalogForm: false}))
    }
	fetch()
  }, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/catalog
			  	`}>
			  		<Button id="_BackFromAddtoCatalog" className="p-2" variant="primary">
			  		  Back
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Catalog"}
		isLoading={isLoading.addCatalogForm}
	>
		{categoryListData ? 
		(<>
		 <FormAddCatalogForm
			{...{ 
				categoryListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddCatalogPage

