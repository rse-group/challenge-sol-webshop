/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from 'react';
import AddtoCartPage from './containers/AddtoCartPage'
import CartPage from './containers/CartPage'
import EditCartItemPage from './containers/EditCartItemPage'
import CheckoutDeliveryPage from './containers/CheckoutDeliveryPage'
import SelfPickupPage from './containers/SelfPickupPage'


const cartRoutes = [
{ 
    path: "/cart/items/add",
    element: <RequireAuth permissionNeeded="SaveCartItem" ><AddtoCartPage/></RequireAuth>
  }	
,
{ 
    path: "/cart/item/edit",
    element: <RequireAuth permissionNeeded="UpdateCartItem" ><EditCartItemPage/></RequireAuth>
  }	
,
{ 
    path: "/cart/checkout/delivery",
    element: <RequireAuth permissionNeeded="SaveShipping" ><CheckoutDeliveryPage/></RequireAuth>
  }	
,
{ 
    path: "/cart",
    element: <RequireAuth permissionNeeded="ViewCart" ><CartPage/></RequireAuth>
  }	
,
{
    path: "/cart/checkout/delivery/self-pickup",
    element: <RequireAuth permissionNeeded="SaveShipping" ><SelfPickupPage/></RequireAuth>
}

]

export default cartRoutes
