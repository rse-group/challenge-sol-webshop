import React, { forwardRef, useMemo } from "react";
import PropTypes from "prop-types";
import { useChart } from "./ChartContext";
import { getPayloadConfigFromPayload } from "./helpers";

const indicatorClassnames = {
  dot: "h-2.5 w-2.5",
  line: "w-1",
  dashed: "w-0 border-[1.5px] border-dashed bg-transparent",
};

const ChartTooltipContent = forwardRef(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart();

    const tooltipLabel = useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return (
          <div className={`font-medium ${labelClassName}`}>
            {labelFormatter(value, payload)}
          </div>
        );
      }

      if (!value) {
        return null;
      }

      return <div className={`font-medium ${labelClassName}`}>{value}</div>;
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={`grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-white px-2.5 py-1.5 text-xs shadow-xl ${className}`}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;

            return (
              <div
                key={item.dataKey}
                className={`flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground ${indicator === "dot" && "items-center"}`}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={`shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg] ${
                            indicatorClassnames[indicator]
                          }`}
                          style={{
                            "--color-bg": indicatorColor,
                            "--color-border": indicatorColor,
                          }}
                        />
                      )
                    )}
                    <div
                      className={`flex flex-1 justify-between leading-none ${nestLabel ? "items-end" : "items-center"}`}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="pl-2 font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltip";
ChartTooltipContent.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.array,
  className: PropTypes.string,
  indicator: PropTypes.oneOf(["dot", "line", "dashed"]),
  hideLabel: PropTypes.bool,
  hideIndicator: PropTypes.bool,
  label: PropTypes.string,
  labelFormatter: PropTypes.func,
  labelClassName: PropTypes.string,
  formatter: PropTypes.func,
  color: PropTypes.string,
  nameKey: PropTypes.string,
  labelKey: PropTypes.string,
};
export default ChartTooltipContent;
