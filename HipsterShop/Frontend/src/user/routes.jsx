import RequireAuth from "@/commons/auth/RequireAuth";

import DaftarUserPage from "./containers/DaftarUserPage";
import TambahUserPage from "./containers/TambahUserPage";
import DetailUserPage from "./containers/DetailUserPage";
import UbahUserPage from "./containers/UbahUserPage";
import UbahRoleUserPage from "./containers/UbahRoleUserPage";

const userRoutes = [
  {
    path: "/settings/user/tambah",
    element: (
      <RequireAuth permissionNeeded="administrator">
        <TambahUserPage />
      </RequireAuth>
    ),
  },
  {
    path: "/settings/user/ubah",
    element: (
      <RequireAuth permissionNeeded="administrator">
        <UbahUserPage />
      </RequireAuth>
    ),
  },
  {
    path: "/settings/user/change-role",
    element: (
      <RequireAuth permissionNeeded="administrator">
        <UbahRoleUserPage />
      </RequireAuth>
    ),
  },
  {
    path: "/settings/user/:id",
    element: (
      <RequireAuth permissionNeeded="administrator">
        <DetailUserPage />
      </RequireAuth>
    ),
  },
  {
    path: "/settings/user",
    element: (
      <RequireAuth permissionNeeded="administrator">
        <DaftarUserPage />
      </RequireAuth>
    ),
  },
];

export default userRoutes;
