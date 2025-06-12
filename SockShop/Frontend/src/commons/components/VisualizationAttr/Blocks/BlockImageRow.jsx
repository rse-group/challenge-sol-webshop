import React from "react";
import PropTypes from "prop-types";

const BlockImageRow = ({ content, label, className = "" }) => {
  return (
    <img
      src={content}
      alt={label}
      className={`w-full max-h-96 object-cover ${className}`}
    />
  );
};

BlockImageRow.propTypes = {
  content: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default BlockImageRow;
