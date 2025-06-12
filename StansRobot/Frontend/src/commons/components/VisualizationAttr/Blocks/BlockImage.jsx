import React from "react";
import PropTypes from "prop-types";

const BlockImage = ({ content, label }) => {
  return (
    <img
      src={content}
      alt={label}
      className="aspect-[4/3] w-full max-h-96 object-cover rounded-btn overflow-hidden"
    />
  );
};

BlockImage.propTypes = {
  content: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default BlockImage;