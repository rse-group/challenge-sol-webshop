import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router";
import { GoChevronDown } from "react-icons/go";
import { MenuItem, hasValidPermission } from "../Menu";
import { Icon } from "@/icons";

const NavbarItem = ({ id, route, label, permission, subMenus, checkPermission }) => {
  const { pathname } = useLocation();
  const isVisible = useMemo(() => {
    if (subMenus?.length > 0) {
      return subMenus.some((subMenu) => hasValidPermission(subMenu, checkPermission));
    }
    return !permission || checkPermission(permission);
  }, [subMenus, permission, checkPermission]);

  if (!isVisible) return null;

  if (route === "#") {
    return (
      <li className="dropdown dropdown-hover shrink-0">
        <button className="btn btn-ghost text-base font-normal">
          <Icon id={id} />
          <span>{label}</span>
          <GoChevronDown />
        </button>
        <ul className="dropdown-content menu bg-base-100 rounded-box shadow-lg min-w-max text-base-content z-50" key={pathname}>
          {subMenus.map((subMenu) => (
            <MenuItem key={subMenu.label} {...subMenu} checkPermission={checkPermission} />
          ))}
        </ul>
      </li>
    );
  }

  return (
    <Link to={route} className="btn btn-ghost text-base font-normal shrink-0">
      {label}
    </Link>
  );
};

NavbarItem.propTypes = {
  id: PropTypes.string,
  route: PropTypes.string,
  label: PropTypes.string.isRequired,
  permission: PropTypes.string,
  subMenus: PropTypes.array,
  checkPermission: PropTypes.func
};

export default React.memo(NavbarItem);
