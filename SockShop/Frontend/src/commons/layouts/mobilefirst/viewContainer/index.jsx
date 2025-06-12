import React from "react";
import useAppearanceStore from "@/commons/appearance/store";
import { Link } from "react-router";
import { MdArrowBack } from "react-icons/md";
import Brand from "@/commons/components/Brand";

const ViewContainerLayoutMobileFirst = ({
  pageName,
  backRoute,
  buttons,
  children,
  isHome,
}) => {
  const { colorTheme } = useAppearanceStore();
  return (
    <div data-theme={colorTheme} className="prose max-w-md mx-auto">
      <h3 className="text-white bg-primary p-5 m-0 flex items-center">
        {backRoute && (
          <Link to={backRoute} className="no-underline">
            <MdArrowBack className="mr-4" color="white" />
          </Link>
        )}
        {isHome ? <Brand isMobileFirst /> : pageName}
      </h3>
      {buttons}
      <div className="flex flex-col gap-8">{children}</div>
    </div>
  );
};

export default ViewContainerLayoutMobileFirst;
