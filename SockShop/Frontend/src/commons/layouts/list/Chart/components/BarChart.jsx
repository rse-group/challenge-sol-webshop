import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/commons/components";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
import { COLORS, formatCurrency } from "./utils";

const ListComponentBarChartLayout = ({ data = [], itemsAttrs = [] }) => {
  const bars = itemsAttrs.filter((item) => item.condition.includes("isSource"));
  const config = bars.reduce((acc, item, index) => {
    acc[item.featureName] = {
      label: item.label,
      color: COLORS[index],
    };
    return acc;
  }, {});
  const xAxis = itemsAttrs.find((item) => item.condition.includes("isXAxis"));
  if (!xAxis) return "Invalid configuration";
  const hasCurrency = bars.some((bar) => bar.condition.includes("isCurrency"));

  return (
    <ChartContainer config={config}>
      <BarChart data={data}>
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
        {bars.map((bar, index) => (
          <Bar
            key={bar}
            dataKey={bar.featureName}
            fill={COLORS[index]}
            radius={4}
          >
            <LabelList
              position="insideTop"
              offset={12}
              fill="#fff"
              fontSize={12}
              formatter={(amount) =>
                bar.condition?.includes("isCurrency")
                  ? formatCurrency(amount)
                  : amount
              }
            />
          </Bar>
        ))}
      </BarChart>
    </ChartContainer>
  );
};

export default ListComponentBarChartLayout;
