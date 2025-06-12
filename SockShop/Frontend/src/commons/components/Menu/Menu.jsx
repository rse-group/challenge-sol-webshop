import React from "react";
import PropTypes from "prop-types";

const Menu = ({ children }) => {
  return <ul className={`menu rounded-box`}>{children}</ul>;
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Menu;
