import Link from "next/link";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Boots", 2019: 40, 2018: 80 },
  { name: "Reign", 2019: 80, 2018: 60 },
  { name: "Slick", 2019: 70, 2018: 50 },
  { name: "Falcon", 2019: 90, 2018: 70 },
  { name: "Sparrow", 2019: 85, 2018: 65 },
];

const ProductOverview = () => {
  return (
    <div className="bg-[#0D0D21] rounded-lg p-5 shadow-lg shadow-blue-950">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-bold">Products Overview</h3>
        <Link href="#" className="text-blue-500 hover:underline">
          View Details
        </Link>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* Grid */}
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#374151"
            vertical={false}
          />
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis axisLine={false} />
          <Tooltip
            contentStyle={{ backgroundColor: "#1F2937", border: "none" }}
            labelStyle={{ color: "#9CA3AF" }}
          />
          <Legend
            iconType="circle"
            wrapperStyle={{ color: "#9CA3AF" }}
            align="left"
          />
          {/* Bars */}
          <Bar
            dataKey="2019"
            fill="#3B82F6"
            barSize={15}
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="2018"
            fill="#4B5563"
            barSize={15}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductOverview;
