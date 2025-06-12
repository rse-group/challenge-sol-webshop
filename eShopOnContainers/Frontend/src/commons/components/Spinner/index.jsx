import React from "react";
import PropTypes from "prop-types";

const Spinner = ({ size = "lg" }) => {
  const sizes = {
    sm: "loading-sm",
    md: "loading-md",
    lg: "loading-lg",
  };

  return <span className={`loading loading-spinner text-primary ${sizes[size]}`} />;
};

Spinner.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Spinner;
