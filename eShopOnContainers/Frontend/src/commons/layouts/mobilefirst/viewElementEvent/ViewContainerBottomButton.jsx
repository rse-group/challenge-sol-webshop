import React from "react";
import useAppearance from "@/commons/appearance/useAppearance";

const ViewContainerBottomButtonLayoutMobileFirst = ({ children }) => {
  const { colorTheme } = useAppearance();
  return (
    <div
      data-theme={colorTheme}
      className="fixed bottom-0 left-0 right-0 p-4 gap-4 flex justify-around bg-primary bg-opacity-25 max-w-md mx-auto"
    >
      {children}
    </div>
  );
};

export default ViewContainerBottomButtonLayoutMobileFirst;
