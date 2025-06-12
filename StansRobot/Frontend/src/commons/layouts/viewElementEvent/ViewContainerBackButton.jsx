import React from "react";

const ViewContainerBackButtonLayout = ({ children }) => {
  return (
    <div className="flex flex-row flex-wrap sm:flex-col gap-2 justify-between static sm:absolute left-5 w-full sm:w-40">
      {children}
    </div>
  );
};

export default ViewContainerBackButtonLayout;
