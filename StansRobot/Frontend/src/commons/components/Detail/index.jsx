import React from "react";
import PropTypes from "prop-types";

const Detail = ({ children }) => {
  return (
    <div className="mx-auto w-full bg-white shadow-xl card not-prose">
      <div className="card-body">{children}</div>
    </div>
  );
};

Detail.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Detail;
