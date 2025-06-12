/*
	Generated on 31/05/2025 by UI Generator PRICES-IDE
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
    element: <AddtoCartPage/>
  }	
,
{ 
    path: "/cart/item/edit",
    element: <RequireAuth permissionNeeded="UpdateCartItem" ><EditCartItemPage/></RequireAuth>
  }	
,
{ 
    path: "/cart/checkout",
    element: <CheckoutPage/>
  }	
,
{ 
    path: "/cart",
    element: <CartPage/>
  }	

]

export default cartRoutes
