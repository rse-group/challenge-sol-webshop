import React from "react";
import PropTypes from "prop-types";

const THEMES = { light: "", dark: ".dark" };

const ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color
  );

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
  ${prefix} [data-chart=${id}] {
  ${colorConfig
    .map(([key, itemConfig]) => {
      const color = itemConfig.theme?.[theme] || itemConfig.color;
      return color ? `  --color-${key}: ${color};` : null;
    })
    .join("\n")}
  }
  `
          )
          .join("\n"),
      }}
    />
  );
};
ChartStyle.propTypes = {
  id: PropTypes.string,
  config: PropTypes.object,
};

export default ChartStyle;
