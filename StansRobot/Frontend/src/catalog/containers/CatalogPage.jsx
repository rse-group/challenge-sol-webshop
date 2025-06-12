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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import CatalogCard from "../components/CatalogCard";
import getCatalogListData from '../services/getCatalogListData'
import getFilterCategoryData from '../services/getFilterCategoryData'

const CatalogPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	listCatalog: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Catalog Page")
  }, []);


const [catalogListData, setCatalogListData] = useState()
	
	const [filterCategoryData, setFilterCategoryData] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listCatalog: true}))
				const { data: catalogListData } = await getCatalogListData()
				const { data: filterCategoryData } = await getFilterCategoryData()
				setCatalogListData(catalogListData.data)
				setFilterCategoryData(filterCategoryData.data)
			} finally {
				setIsLoading(prev => ({...prev, listCatalog: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	{checkPermission("SaveCatalog") &&  (
			  	  <Link to={`/catalog/add
			  	  `}>
			  	  	<Button id="_swRf-MIIEe-dLb7Rw-1j8g" className="p-2" variant="primary">
			  	  	  Add Catalog
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"Catalog"}
	singularName={"Catalog"}
	items={[catalogListData]}
	isLoading={isLoading.listCatalog}
>
	<CatalogCard
		catalogListData={catalogListData}
		filterCategoryData={filterCategoryData}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default CatalogPage

