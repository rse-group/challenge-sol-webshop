import React from "react";
import { Spinner } from "@/commons/components";

const FormContainerLayoutMobileFirst = ({
  isLoading = false,
  singularName,
  children,
}) => {
  return (
    <div className="pb-28">
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

export default FormContainerLayoutMobileFirst;
