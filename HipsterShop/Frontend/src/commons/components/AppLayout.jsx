import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import useAppearanceStore from "@/commons/appearance/store";
import environment from "@/commons/utils/environment";
import { Toaster } from "react-hot-toast";
import { ImSpinner } from "react-icons/im";
import Navbar from "./Navigation/Navbar";
import { INTERFACE_KITS } from "@/commons/constants/interface";
import useTypography from "./Typography";
import Footer from "./Footer";
import HeaderContext from "./Header/HeaderContext";
import Sidebar from "./Navigation/Sidebar";
import { useLocation } from "react-router";

const AppLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { interfaceKit, colorTheme, setAppearance } = useAppearanceStore();
  const typography = useTypography();
  const [title, setTitle] = useState("Home");
  const { pathname } = useLocation();
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!colorTheme) {
      setIsLoading(true);
      axios
        .get(`${environment.staticServerApi}/appearance`)
        .then((res) => setAppearance(res.data))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }
  }, []);

  useEffect(() => {
    toggleRef.current.checked = false;
  }, [pathname]);

  const isRounded = INTERFACE_KITS[interfaceKit]?.rounded ?? true;

  if (isLoading)
    return (
      <div className="w-screen h-screen grid place-items-center">
        <ImSpinner className="w-12 h-12 animate-spin" />
      </div>
    );

  return (
    <div
      data-theme={colorTheme}
      className={`drawer ${typography} ${
        isRounded ? "rounded-true" : "rounded-false"
      }`}
    >
      <input
        type="checkbox"
        id="navigation-sidebar"
        className="drawer-toggle"
        ref={toggleRef}
      />
      <div className="drawer-content">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <HeaderContext.Provider value={{ title, setTitle }}>
            <div className="flex-1 bg-base-200">{children}</div>
          </HeaderContext.Provider>
        </div>
        <Footer />
      </div>
      <Sidebar />
      <Toaster />
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
