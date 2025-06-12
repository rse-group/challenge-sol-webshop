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
import FormFormEditCategory from '../components/FormFormEditCategory'
import getDataCategoryUpdate from '../services/getDataCategoryUpdate'

const EditCategoryPage = props => {
  const { categoryId } = useParams()
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	formEditCategory: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit Category Page")
  }, []);


const [dataCategoryUpdate, setDataCategoryUpdate] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, formEditCategory: true}))
      const { data: dataCategoryUpdateResponse } = await getDataCategoryUpdate({ categoryId  })

	  setDataCategoryUpdate(dataCategoryUpdateResponse.data)
	  setIsLoading(prev => ({...prev, formEditCategory: false}))
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
		singularName={"Edit"}
		isLoading={isLoading.formEditCategory}
	>
		{dataCategoryUpdate ? 
		(<>
		 <FormFormEditCategory
			{...{ 
				dataCategoryUpdate
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditCategoryPage

