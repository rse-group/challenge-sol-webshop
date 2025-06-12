import React from "react";

const ViewContainerButtonLayout = ({ children }) => {
  return (
    <div className="flex flex-row flex-wrap sm:justify-end gap-2">
      {children}
    </div>
  );
};

export default ViewContainerButtonLayout;
