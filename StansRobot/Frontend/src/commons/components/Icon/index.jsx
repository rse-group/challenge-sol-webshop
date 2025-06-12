import React from "react";
import PropTypes from "prop-types";
import { MdAdjust } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";
import { TbPackage } from "react-icons/tb";
import { HiOutlinePencilAlt } from "react-icons/hi";

const Icon = ({ name }) => {
  switch (name) {
    case "Donasi":
      return <BiDonateHeart className="w-8 h-8 mb-1" color="white" />;
    case "Konfirmasi":
      return <HiOutlinePencilAlt className="w-8 h-8 mb-1" color="white" />;
    case "Barang":
      return <TbPackage className="w-8 h-8 mb-1" color="white" />;
    default:
      return <MdAdjust className="w-8 h-8 mb-1" color="white" />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
