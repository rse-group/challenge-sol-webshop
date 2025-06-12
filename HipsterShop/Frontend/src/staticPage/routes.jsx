import RequireAuth from "@/commons/auth/RequireAuth";
import React from "react";
import StaticPageDetail from "./containers/StaticPageDetail";
import StaticPageEdit from "./containers/StaticPageEdit";

const defaultPageRoutes = [
  { path: "/aboutus", element: <StaticPageDetail slug="aboutus" /> },
  { path: "/contacts", element: <StaticPageDetail slug="contacts" /> },
  { path: "/partners", element: <StaticPageDetail slug="partners" /> },
  { path: "/location", element: <StaticPageDetail slug="location" /> },
  {
    path: "/bankaccount",
    element: <StaticPageDetail slug="bankaccount" />,
  },
];

const path = "/static-page";

const staticPageRoutes = [
  ...defaultPageRoutes,
  { path: path + "/detail/:staticPageId", element: <StaticPageDetail /> },
  {
    path: path + "/edit/:staticPageId",
    element: (
      <RequireAuth permissionNeeded="administrator">
        <StaticPageEdit />
      </RequireAuth>
    ),
  },
];

export default staticPageRoutes;
