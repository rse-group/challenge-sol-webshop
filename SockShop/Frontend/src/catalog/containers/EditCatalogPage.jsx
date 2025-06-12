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
import FormEditCatalogForm from '../components/FormEditCatalogForm'
import getEditCatalogData from '../services/getEditCatalogData'
import getCategoryListData from '../services/getCategoryListData'

const EditCatalogPage = props => {
  const { catalogId } = useParams()
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	editCatalogForm: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit Catalog Page")
  }, []);


const [editCatalogData, setEditCatalogData] = useState()
  const [categoryListData, setCategoryListData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editCatalogForm: true}))
      const { data: editCatalogDataResponse } = await getEditCatalogData({ catalogId  })
      const { data: categoryListDataResponse } = await getCategoryListData({ catalogId  })

	  setEditCatalogData(editCatalogDataResponse.data)
	  setCategoryListData(categoryListDataResponse.data)
	  setIsLoading(prev => ({...prev, editCatalogForm: false}))
    }
	fetch()
  }, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/catalog/${catalogId}
			  	`}>
			  		<Button id="_eRq8IMMrEe-RLeGDC5kypA" className="p-2" variant="primary">
			  		  Back
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Catalog"}
		isLoading={isLoading.editCatalogForm}
	>
		{editCatalogData && categoryListData ? 
		(<>
		 <FormEditCatalogForm
			{...{ 
				editCatalogData
, 				categoryListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditCatalogPage

