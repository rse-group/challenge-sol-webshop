import React, { useContext } from "react";
import HeaderContext from "./HeaderContext";

const Header = () => {
  const { title } = useContext(HeaderContext);
  return (
    <nav className="sticky top-0 navbar justify-between w-full py-0 px-4 bg-primary text-primary-content z-20 shadow-xl">
      <h1 className="text-2xl font-semibold ml-2">{title}</h1>
    </nav>
  );
};

export default Header;
