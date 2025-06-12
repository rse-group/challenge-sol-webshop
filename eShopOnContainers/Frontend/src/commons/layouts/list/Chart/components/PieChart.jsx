import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/commons/components";
import { Pie, PieChart } from "recharts";
import { COLORS, formatCurrency } from "./utils";

const ListComponentPieChartLayout = ({ data = [], itemsAttrs = [] }) => {
  const groupedBy = itemsAttrs.find((attr) =>
    attr.condition.includes("isGroupedBy")
  );
  const groupedByLabel = itemsAttrs.find((attr) =>
    attr.condition.includes("isGroupLabel")
  );
  const source = itemsAttrs.find((attr) => attr.condition.includes("isSource"));
  const hasCurrency = source.condition.includes("isCurrency");
  if (!groupedBy || !source || !groupedByLabel) return "Invalid configuration";
  const chartData = data.reduce((acc, item) => {
    const group = item[groupedBy.featureName];
    const sourceValue = item[source.featureName];
    const existingGroup = acc.find(
      (entry) => entry[groupedBy.featureName] === group
    );
    if (existingGroup) {
      existingGroup[source.featureName] += sourceValue;
    } else {
      acc.push({
        [groupedBy.featureName]: group,
        [groupedByLabel.featureName]: item[groupedByLabel.featureName],
        [source.featureName]: sourceValue,
        fill: COLORS[acc.length],
      });
    }
    return acc;
  }, []);

  const config = chartData.reduce(
    (acc, item) => {
      acc[item[groupedBy.featureName]] = {
        label: item[groupedByLabel.featureName],
        color: item.fill,
      };
      return acc;
    },
    {
      [groupedBy.featureName]: {
        label: groupedBy.label,
      },
    }
  );

  return (
    <ChartContainer config={config}>
      <PieChart>
        <ChartLegend
          content={<ChartLegendContent nameKey={groupedBy.featureName} />}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Pie
          data={chartData}
          dataKey={source.featureName}
          nameKey={groupedBy.featureName}
          label={(entry) =>
            hasCurrency
              ? formatCurrency(entry[source.featureName])
              : entry[source.featureName]
          }
        />
      </PieChart>
    </ChartContainer>
  );
};

export default ListComponentPieChartLayout;
