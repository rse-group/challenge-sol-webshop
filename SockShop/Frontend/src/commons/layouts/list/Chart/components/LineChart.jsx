import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/commons/components";
import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { COLORS, formatCurrency } from "./utils";

const ListComponentLineChartLayout = ({ data = [], itemsAttrs = [] }) => {
  const lines = itemsAttrs.filter((item) =>
    item.condition.includes("isSource")
  );
  const config = lines.reduce((acc, item, index) => {
    acc[item.featureName] = {
      label: item.label,
      color: COLORS[index],
    };
    return acc;
  }, {});
  const xAxis = itemsAttrs.find((item) => item.condition.includes("isXAxis"));
  const hasCurrency = lines.some((line) =>
    line.condition.includes("isCurrency")
  );
  return (
    <ChartContainer config={config}>
      <LineChart data={data}>
        <ChartLegend content={<ChartLegendContent />} />
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={xAxis.featureName}
          tickLine={false}
          axisLine={false}
          tickMargin={10}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          width={hasCurrency ? 100 : undefined}
          tickFormatter={(amount) =>
            hasCurrency ? formatCurrency(amount) : amount
          }
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        {lines.map((line, index) => (
          <Line
            key={line}
            dataKey={line.featureName}
            fill={COLORS[index]}
            radius={4}
          ></Line>
        ))}
      </LineChart>
    </ChartContainer>
  );
};

export default ListComponentLineChartLayout;
