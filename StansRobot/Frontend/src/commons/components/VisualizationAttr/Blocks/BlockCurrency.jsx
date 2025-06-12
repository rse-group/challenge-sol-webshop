import React from "react";
import PropTypes from "prop-types";
import Label from "../Label";

const BlockCurrency = ({ content, label }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  return (
    <>
      <Label label={label} />
      <div>{formatCurrency(content)}</div>
    </>
  );
};

BlockCurrency.propTypes = {
  content: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default BlockCurrency;
