import React from "react";
import { Link } from "react-router";
import { FiLogOut, FiMenu } from "react-icons/fi";
import Brand from "../Brand";
import NavbarItem from "./NavbarItem";
import useNavigation from "./useNavigation";
import useAuth from "@/commons/auth";

const Navbar = React.memo(function Navbar() {
  const { checkPermission } = useAuth();
  const { handleLogout, isAuthenticated, isNotAuthPage, navbarMenus } =
    useNavigation();

  return (
    <nav className="sticky top-0 navbar justify-between w-full py-0 px-4 bg-primary text-primary-content z-20 shadow-xl">
      <Brand showLogo />
      {isNotAuthPage && (
        <div className="menu-horizontal p-2 hidden lg:flex lg:flex-wrap">
          {navbarMenus.map((menu) => (
            <NavbarItem {...menu} key={menu.id} checkPermission={checkPermission} />
          ))}
          {!isAuthenticated && (
            <Link
              to={"/login"}
              className="btn btn-primary bg-base-100 text-base-content hover:text-base-primary"
            >
              Masuk
            </Link>
          )}
        </div>
      )}
      {isAuthenticated && (
        <button
          className="btn btn-ghost items-center gap-2 text-primary-content normal-case hidden lg:inline-flex"
          onClick={handleLogout}
        >
          <FiLogOut className="w-5 h-5" />
          Keluar
        </button>
      )}
      {isNotAuthPage && (
        <label
          htmlFor="navigation-sidebar"
          className="flex-none lg:hidden btn btn-square btn-ghost"
        >
          <FiMenu className="w-6 h-6" />
        </label>
      )}
    </nav>
  );
});

export default Navbar;
