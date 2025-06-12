import React from "react";
import PropTypes from "prop-types";

const Label = ({ label }) => {
  return (
    <label className="label">
      <span className="label-text text-sm uppercase font-medium text-gray-400">
        {label}
      </span>
    </label>
  );
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Label;
