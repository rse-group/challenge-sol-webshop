import React from "react";
import PropTypes from "prop-types";
import Label from "../Label";

const BlockText = ({ content, label }) => {
  return (
    <div className="whitespace-pre-line">
      <Label label={label} />
      <div className="pl-1">{content}</div>
    </div>
  );
};

BlockText.propTypes = {
  content: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default BlockText;