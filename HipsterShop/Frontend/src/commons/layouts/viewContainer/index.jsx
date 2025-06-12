import React from "react";

const ViewContainerLayout = ({ buttons, children }) => {
  return (
    <div className="flex flex-col gap-4 mx-auto w-full max-w-screen-xl prose p-6">
      {buttons}
      <div className="flex flex-col">{children}</div>
    </div>
  );
};

export default ViewContainerLayout;
