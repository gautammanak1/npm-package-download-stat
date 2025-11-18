"use client";

import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { format, parseISO } from "date-fns";
import { PyPIDownloadPoint } from "@/lib/pypi-api";
import { motion } from "framer-motion";

interface PyPIDownloadChartProps {
  data: PyPIDownloadPoint;
  type: "day" | "week" | "month";
}

export function PyPIDownloadChart({ data, type }: PyPIDownloadChartProps) {
  const chartData = useMemo(() => {
    if (!data.data || data.data.length === 0) {
      return [];
    }

    return data.data.map((item) => ({
      date: format(parseISO(item.date), type === "day" ? "MMM dd" : type === "week" ? "MMM dd" : "MMM yyyy"),
      downloads: item.downloads,
    }));
  }, [data, type]);

  const totalDownloads = useMemo(() => {
    return data.data?.reduce((sum, item) => sum + item.downloads, 0) || 0;
  }, [data]);

  if (chartData.length === 0) {
    return (
      <div className="flex h-[400px] items-center justify-center text-muted-foreground">
        No data available
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="mb-4 text-center">
        <p className="text-sm text-muted-foreground">
          Total downloads: <span className="font-semibold text-foreground">{totalDownloads.toLocaleString()}</span>
        </p>
      </div>
      <ResponsiveContainer width="100%" height={400} className="min-h-[300px]">
        <LineChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted opacity-50" />
          <XAxis
            dataKey="date"
            className="text-xs"
            tick={{ fill: "currentColor", fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={80}
            interval="preserveStartEnd"
          />
          <YAxis
            className="text-xs"
            tick={{ fill: "currentColor", fontSize: 12 }}
            width={60}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
            labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 600 }}
            cursor={{ stroke: "hsl(var(--primary))", strokeWidth: 1 }}
          />
          <Line
            type="monotone"
            dataKey="downloads"
            stroke="hsl(var(--primary))"
            strokeWidth={3}
            dot={{ fill: "hsl(var(--primary))", r: 4, strokeWidth: 2, stroke: "hsl(var(--card))" }}
            activeDot={{ r: 7, strokeWidth: 2, stroke: "hsl(var(--card))" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

