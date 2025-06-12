import React from "react";
import PropTypes from "prop-types";
import useVisualizationAttr from "./useVisualizationAttr";

const VisualizationAttr = ({ label, content, isCurrency }) => {
  const { getContentType, getRenderBlock } = useVisualizationAttr();

  const contentType = isCurrency ? "currency" : getContentType(content);
  const RenderBlock = getRenderBlock(contentType);

  return (
    <div className="mb-2">
      <RenderBlock content={content} label={label} />
    </div>
  );
};

VisualizationAttr.propTypes = {
  label: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  isCurrency: PropTypes.bool,
};

export default VisualizationAttr;
