import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ onClick, variant, children }) => {
  return (
    <li
      className="w-full card card-compact bg-base-100 shadow-lg"
      onClick={onClick}
      {...variant}
    >
      {children}
    </li>
  );
};

ListItem.propTypes = {
  onClick: PropTypes.func,
  variant: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default ListItem;
