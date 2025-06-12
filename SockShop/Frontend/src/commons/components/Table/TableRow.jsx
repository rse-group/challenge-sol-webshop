import React from "react";
import PropTypes from "prop-types";

const TableRow = ({ onClick, children }) => {
  return <tr onClick={onClick}>{children}</tr>;
};

TableRow.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default TableRow;
