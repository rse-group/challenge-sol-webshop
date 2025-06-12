/*
	Generated on 05/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from 'react';
import AddtoCartPage from './containers/AddtoCartPage'
import CartPage from './containers/CartPage'
import EditCartItemPage from './containers/EditCartItemPage'
import CheckoutPage from './containers/CheckoutPage'

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
    path: "/cart/checkout",
    element: <RequireAuth permissionNeeded="SaveOrder" ><CheckoutPage/></RequireAuth>
  }	
,
{ 
    path: "/cart",
    element: <RequireAuth permissionNeeded="ViewCart" ><CartPage/></RequireAuth>
  }	

]

export default cartRoutes
