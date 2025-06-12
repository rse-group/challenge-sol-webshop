/*
	Generated on 31/05/2025 by UI Generator PRICES-IDE
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
    element: <OrderNowPage/>
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
