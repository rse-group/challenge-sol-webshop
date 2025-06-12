import React from "react";
import PropTypes from "prop-types";
import Label from "../Label";

const BlockArray = ({ content, label }) => {
  return (
    <>
      <Label label={label} />
      <div>{content.join(", ")}</div>
    </>
  );
};

BlockArray.propTypes = {
  content: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
};

export default BlockArray;
