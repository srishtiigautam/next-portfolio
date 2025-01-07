"use client";

import * as React from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define the types for the data and configuration
export type PieChartDataItem = {
  key: string; // Unique identifier for the data item
  value: number; // Numeric value for the data item
  fill?: string; // Optional color for the slice
};

export type PieChartConfig = {
  [key: string]: {
    label: string; // Label to display for the item
    color: string; // Color to use for the item
  };
};

interface GenericPieChartProps {
  data: PieChartDataItem[]; // Data for the chart
  config: PieChartConfig; // Configuration for the chart
  title: string; // Title of the chart
}

const GenericPieChart: React.FC<GenericPieChartProps> = ({ data, config, title }) => {
  const id = "pie-interactive";
  const [activeItem, setActiveItem] = React.useState(data[0]?.key);

  const activeIndex = React.useMemo(
    () => data.findIndex((item) => item.key === activeItem),
    [activeItem, data]
  );
  const keys = React.useMemo(() => data.map((item) => item.key), [data]);

  return (
    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={config} />
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-0">
        <div className="grid gap-1 mr-3">
          <CardTitle>{title}</CardTitle>
        </div>
        <Select value={activeItem} onValueChange={setActiveItem}>
          <SelectTrigger
            className="mt-2 sm:mt-0 h-7 w-full sm:w-[130px] rounded-lg pl-2.5"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select item" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {keys.map((key) => {
              const itemConfig = config[key];

              if (!itemConfig) {
                return null;
              }

              return (
                <SelectItem
                  key={key}
                  value={key}
                  className="rounded-lg [&_span]:flex"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-sm"
                      style={{
                        backgroundColor: itemConfig.color,
                      }}
                    />
                    {itemConfig?.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={config}
          className="mx-auto aspect-square w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
        >
          <PieChart width={300} height={300}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data}
              dataKey="value"
              nameKey="key"
              innerRadius="50%"
              outerRadius="70%"
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-xl sm:text-2xl lg:text-3xl font-bold"
                        >
                          {data[activeIndex]?.value.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-xs sm:text-sm lg:text-base"
                        >
                          {config[activeItem]?.label || "Value"}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default GenericPieChart;
