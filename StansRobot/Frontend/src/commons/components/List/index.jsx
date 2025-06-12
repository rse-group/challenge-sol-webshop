import React from "react";
import PropTypes from "prop-types";

const List = ({ className, children, isRow }) => { 
  return (
    <ul
      className={`grid gap-6 w-full ${className}`}
      style={{
        gridTemplateColumns: isRow ? "1fr" : `repeat(auto-fill, minmax(290px, 1fr))`,
      }}
    >
      {children}
    </ul>
  );
};

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isRow: PropTypes.bool,
};

export default List;
