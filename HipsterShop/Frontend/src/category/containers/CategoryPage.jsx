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
import CategoryTable from "../components/CategoryTable";
import getTableCategory from '../services/getTableCategory'

const CategoryPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableCategory: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Category Page")
  }, []);


const [tableCategory, setTableCategory] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableCategory: true}))
				const { data: tableCategory } = await getTableCategory()
				setTableCategory(tableCategory.data)
			} finally {
				setIsLoading(prev => ({...prev, tableCategory: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	{checkPermission("SaveCategory") &&  (
			  	  <Link to={`/category/create
			  	  `}>
			  	  	<Button id="_iuGosOuPEe-3rb5b6hC4pA" className="p-2" variant="primary">
			  	  	  Add Category
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Category"}
	singularName={"Category"}
	items={[tableCategory]}
	isLoading={isLoading.tableCategory}
>
	<CategoryTable
		tableCategory={tableCategory}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default CategoryPage

