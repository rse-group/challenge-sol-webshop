import React, { forwardRef } from "react";
import { getPayloadConfigFromPayload } from "./helpers";
import PropTypes from "prop-types";
import { useChart } from "./ChartContext";

const ChartLegendContent = forwardRef(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
    ref
  ) => {
    const { config } = useChart();
    if (!payload?.length) return null;

    return (
      <div
        ref={ref}
        className={`flex items-center justify-center gap-4 ${verticalAlign === "top" ? "pb-3" : "pt-3"} ${className}`}
      >
        {payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          return (
            <div
              key={item.value}
              className="flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
      </div>
    );
  }
);
ChartLegendContent.displayName = "ChartLegend";
ChartLegendContent.propTypes = {
  className: PropTypes.string,
  hideIcon: PropTypes.bool,
  payload: PropTypes.array,
  verticalAlign: PropTypes.oneOf(["top", "bottom"]),
  nameKey: PropTypes.string,
};

export default ChartLegendContent;
