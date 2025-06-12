/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from 'react';
import PaymentPage from './containers/PaymentPage'
import OrderDetailPage from './containers/OrderDetailPage'
import PaywithEWallet from './containers/PaywithEWallet'
import PaywithCreditCard from './containers/PaywithCreditCard'

const paymentOrderRoutes = [
{ 
    path: "/payment",
    element: <RequireAuth permissionNeeded="ViewPayment" ><PaymentPage/></RequireAuth>
  }	
,
{ 
    path: "/payment/:orderId",
    element: <RequireAuth permissionNeeded="ViewPayment" ><OrderDetailPage/></RequireAuth>
  }	
,
{ 
    path: "/payment/ewallet/:orderId",
    element: <RequireAuth permissionNeeded="SavePayment" ><PaywithEWallet/></RequireAuth>
  }	
,
{ 
    path: "/payment/creditcard/:orderId",
    element: <RequireAuth permissionNeeded="SavePayment" ><PaywithCreditCard/></RequireAuth>
  }	

]

export default paymentOrderRoutes
