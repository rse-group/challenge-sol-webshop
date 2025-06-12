/*
	Generated on 05/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from 'react';
import CatalogPage from './containers/CatalogPage'
import CatalogDetailPage from './containers/CatalogDetailPage'
import AddCatalogPage from './containers/AddCatalogPage'
import EditCatalogPage from './containers/EditCatalogPage'

const catalogRoutes = [
{ 
    path: "/catalog",
    element: <CatalogPage />,
  }	
,
{ 
    path: "/catalog/add",
    element: <RequireAuth permissionNeeded="SaveCatalog" ><AddCatalogPage/></RequireAuth>
  }	
,
{ 
    path: "/catalog/edit",
    element: <RequireAuth permissionNeeded="UpdateCatalog" ><EditCatalogPage/></RequireAuth>
  }	
,
{ 
    path: "/catalog/:catalogId",
    element: <CatalogDetailPage />,
  }	

]

export default catalogRoutes
