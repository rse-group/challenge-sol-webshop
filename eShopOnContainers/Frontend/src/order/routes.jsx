/*
	Generated on 05/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from 'react';
import OrderNowPage from './containers/OrderNowPage'
import OrderPage from './containers/OrderPage'
import OrderDetailPage from './containers/OrderDetailPage'

const orderRoutes = [
{ 
    path: "/order-now",
    element: <RequireAuth permissionNeeded="SaveOrder" ><OrderNowPage/></RequireAuth>
  }	
,
{ 
    path: "/order",
    element: <RequireAuth permissionNeeded="ViewAllOrder" ><OrderPage/></RequireAuth>
  }	
,
{ 
    path: "/order/:orderId",
    element: <RequireAuth permissionNeeded="ViewAllOrder" ><OrderDetailPage/></RequireAuth>
  }	

]

export default orderRoutes
