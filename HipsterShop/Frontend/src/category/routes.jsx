/*
	Generated on 31/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from 'react';
import CategoryPage from './containers/CategoryPage'
import AddCategoryPage from './containers/AddCategoryPage'
import EditCategoryPage from './containers/EditCategoryPage'

const categoryRoutes = [
{ 
    path: "/category",
    element: <CategoryPage />,
  }	
,
{ 
    path: "/category/create",
    element: <RequireAuth permissionNeeded="SaveCategory" ><AddCategoryPage/></RequireAuth>
  }	
,
{ 
    path: "/category/edit",
    element: <RequireAuth permissionNeeded="UpdateCategory" ><EditCategoryPage/></RequireAuth>
  }	

]

export default categoryRoutes
