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
import { format, parseISO, subDays, subWeeks, subMonths, subYears } from "date-fns";
import { DownloadRange } from "@/lib/npm-api";
import { motion } from "framer-motion";

interface DownloadChartProps {
  data: DownloadRange;
  type: "day" | "week" | "month" | "year";
}

export function DownloadChart({ data, type }: DownloadChartProps) {
  const chartData = useMemo(() => {
    if (!data.downloads || data.downloads.length === 0) {
      return [];
    }

    if (type === "day") {
      return data.downloads.map((item) => ({
        date: format(parseISO(item.day), "MMM dd"),
        downloads: item.downloads,
      }));
    }

    if (type === "week") {
      const weeklyData: { [key: string]: number } = {};
      data.downloads.forEach((item) => {
        const week = format(parseISO(item.day), "yyyy-'W'ww");
        weeklyData[week] = (weeklyData[week] || 0) + item.downloads;
      });
      return Object.entries(weeklyData).map(([date, downloads]) => ({
        date,
        downloads,
      }));
    }

    if (type === "month") {
      const monthlyData: { [key: string]: number } = {};
      data.downloads.forEach((item) => {
        const month = format(parseISO(item.day), "MMM yyyy");
        monthlyData[month] = (monthlyData[month] || 0) + item.downloads;
      });
      return Object.entries(monthlyData).map(([date, downloads]) => ({
        date,
        downloads,
      }));
    }

    if (type === "year") {
      const yearlyData: { [key: string]: number } = {};
      data.downloads.forEach((item) => {
        const year = format(parseISO(item.day), "yyyy");
        yearlyData[year] = (yearlyData[year] || 0) + item.downloads;
      });
      return Object.entries(yearlyData).map(([date, downloads]) => ({
        date,
        downloads,
      }));
    }

    return [];
  }, [data, type]);

  const totalDownloads = useMemo(() => {
    return data.downloads?.reduce((sum, item) => sum + item.downloads, 0) || 0;
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
      <ResponsiveContainer width="100%" height={400}>
        {type === "day" ? (
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="date"
              className="text-xs"
              tick={{ fill: "currentColor" }}
            />
            <YAxis
              className="text-xs"
              tick={{ fill: "currentColor" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Line
              type="monotone"
              dataKey="downloads"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--primary))", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        ) : (
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="date"
              className="text-xs"
              tick={{ fill: "currentColor" }}
            />
            <YAxis
              className="text-xs"
              tick={{ fill: "currentColor" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Bar
              dataKey="downloads"
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        )}
      </ResponsiveContainer>
    </motion.div>
  );
}

