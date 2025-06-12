import React from "react";
import AdminPage from "./containers/AdminPage";
import BlankPage from "./containers/BlankPage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import ForgotPasswordPage from "./containers/ForgotPasswordPage";
import UnauthorizedPage from "./containers/Unauthorized";
import RequireAuth from "./auth/RequireAuth";
import RegisterMobilePage from "./containers/RegisterMobilePage";
import LoginMobilePage from "./containers/LoginMobilePage";
import ForgotPasswordMobilePage from "./containers/ForgotPasswordMobilePage";

const commonRoutes = [
  {
    path: "/settings/appearance",
    element: (
      <RequireAuth permissionNeeded="administrator">
        <AdminPage />
      </RequireAuth>
    ),
  },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
  { path: "/unauthorized", element: <UnauthorizedPage /> },
  { path: "*", element: <BlankPage /> },
];

const commonMobileRoutes = [
  { path: "/register", element: <RegisterMobilePage /> },
  { path: "/login", element: <LoginMobilePage /> },
  { path: "/forgot-password", element: <ForgotPasswordMobilePage /> },
  { path: "*", element: <BlankPage /> },
];

export { commonRoutes, commonMobileRoutes };
