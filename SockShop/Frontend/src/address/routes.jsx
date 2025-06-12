/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from 'react';
import ProfilePage from './containers/ProfilePage'
import AddAddressPage from './containers/AddAddressPage'
import EditAddressPage from './containers/EditAddressPage'
import EditPhoneNumberPage from './containers/EditPhoneNumberPage'

const addressRoutes = [
{ 
    path: "/profile/address/add",
    element: <RequireAuth permissionNeeded="SaveAddress" ><AddAddressPage/></RequireAuth>
  }	
,
{ 
    path: "/profile/address/edit",
    element: <RequireAuth permissionNeeded="UpdateAddress" ><EditAddressPage/></RequireAuth>
  }	
,
{ 
    path: "/profile/phone-number/edit",
    element: <RequireAuth permissionNeeded="UpdatePhoneNumber" ><EditPhoneNumberPage/></RequireAuth>
  }	
,
{ 
    path: "/profile",
    element: <RequireAuth permissionNeeded="ViewAddress" ><ProfilePage/></RequireAuth>
  }	

]

export default addressRoutes
