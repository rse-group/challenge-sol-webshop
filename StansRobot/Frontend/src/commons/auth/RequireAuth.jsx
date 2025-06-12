import React from "react";
import PropTypes from "prop-types";
import { useAuth } from ".";
import { Navigate, useLocation } from "react-router";

function RequireAuth({ permissionNeeded, children, isMobileFirst }) {
  const { permissions, isAuthenticated } = useAuth();
  const location = useLocation();

  // user is not logged in
  if (!isAuthenticated) {
    return (
      <Navigate
        to={`${isMobileFirst ? "/mobile" : ""}/login${isMobileFirst ? `?homeUrl=${location.pathname}` : ""}`}
        state={{ from: location.pathname }}
      />
    );
  }

  // user doesn't have any permission
  if (isAuthenticated && !permissions) {
    return <Navigate to="/unauthorized" />;
  }

  // user doesn't have permission needed
  if (
    !permissions.includes(permissionNeeded) &&
    !permissions.includes("administrator")
  ) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}

RequireAuth.propTypes = {
  permissionNeeded: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isMobileFirst: PropTypes.bool,
};

export default RequireAuth;
