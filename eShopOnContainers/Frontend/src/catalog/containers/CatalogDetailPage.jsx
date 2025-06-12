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

import CatalogDetail from '../components/CatalogDetail'
import getCatalogDetailData from '../services/getCatalogDetailData'

const CatalogDetailPage = props => {
  const { catalogId } = useParams()
  const [isLoading, setIsLoading] = useState({
	catalogDetail: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Catalog Detail Page")
  }, []);


const [catalogDetailData, setCatalogDetailData] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, catalogDetail: true}))
				const { data: catalogDetailData } = await getCatalogDetailData({ catalogId, catalogId })
				setCatalogDetailData(catalogDetailData.data)
			} finally {
				setIsLoading(prev => ({...prev, catalogDetail: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/catalog
			  	`}>
			  		<Button id="_u765wCNQEfCdW_H1NywOIw" className="p-2 w-full" variant="primary">
			  		  Back
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Catalog Detail"}
	singularName={"Detail"}
	items={{...catalogDetailData}}
	isLoading={isLoading.catalogDetail}
	isCorrelatedWithAnotherComponent={false}
>
	<CatalogDetail {...{ data : { ...catalogDetailData }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default CatalogDetailPage

