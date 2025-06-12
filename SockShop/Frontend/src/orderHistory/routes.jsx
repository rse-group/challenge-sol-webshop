/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from 'react';
import OrderHistoryPage from './containers/OrderHistoryPage'
import OrderHistoryDetailPage from './containers/OrderHistoryDetailPage'

const orderHistoryRoutes = [
{ 
    path: "/order-history",
    element: <RequireAuth permissionNeeded="ViewOrderHistory" ><OrderHistoryPage/></RequireAuth>
  }	
,
{ 
    path: "/order-history/:orderId",
    element: <RequireAuth permissionNeeded="ViewOrderHistory" ><OrderHistoryDetailPage/></RequireAuth>
  }	

]

export default orderHistoryRoutes
