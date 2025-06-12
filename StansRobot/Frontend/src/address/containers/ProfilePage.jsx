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
import AccountInformation from '../components/AccountInformation'
import getAccountInformationData from '../services/getAccountInformationData'
import SavedCard from "../components/SavedCard";
import getAddressListData from '../services/getAddressListData'

const ProfilePage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	accountInformation: false,
	listSavedAddresses: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Profile Page")
  }, []);


const [accountInformationData, setAccountInformationData] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, accountInformation: true}))
				const { data: accountInformationData } = await getAccountInformationData({  })
				setAccountInformationData(accountInformationData.data)
			} finally {
				setIsLoading(prev => ({...prev, accountInformation: false}))
			}
		}
		fetchData()
	}, [])
const [addressListData, setAddressListData] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listSavedAddresses: true}))
				const { data: addressListData } = await getAddressListData()
				setAddressListData(addressListData.data)
			} finally {
				setIsLoading(prev => ({...prev, listSavedAddresses: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	{checkPermission("SaveAddress") &&  (
			  	  <Link to={`/profile/address/add
			  	  `}>
			  	  	<Button id="_8G1H0AekEfCOVew4wI5gAA" className="p-2 w-full" variant="primary">
			  	  	  Add Address
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Account Information"}
	singularName={"Information"}
	items={{...accountInformationData}}
	isLoading={isLoading.accountInformation}
	isCorrelatedWithAnotherComponent={false}
>
	<AccountInformation {...{ data : { ...accountInformationData }}} />
</Layouts.DetailContainerLayout>
<Layouts.ListContainerCardLayout
	title={"Saved Addresses"}
	singularName={"Saved"}
	items={[addressListData]}
	isLoading={isLoading.listSavedAddresses}
>
	<SavedCard
		addressListData={addressListData}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ProfilePage

