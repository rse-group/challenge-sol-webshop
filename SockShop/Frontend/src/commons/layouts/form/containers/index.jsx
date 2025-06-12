import React from "react";
import { Spinner } from "@/commons/components";
import PropTypes from "prop-types";

const FormContainerLayout = ({ isLoading = false, children }) => {
  return (
    <div>
      {isLoading ? (
        <div className="py-8 text-center">
          <Spinner />
        </div>
      ) : (
        children
      )}
    </div>
  );
};

FormContainerLayout.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default FormContainerLayout;
