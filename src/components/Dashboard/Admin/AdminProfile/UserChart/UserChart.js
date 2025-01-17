import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

// Color palette for bars
const colors = [
  "#3357FF", // Vibrant Orange
  "#3357FF", // Bright Green
  "#3357FF", // Deep Blue
  "#3357FF", // Hot Pink
  "#3357FF", // Gold
  "#3357FF", // Blue Violet
];


// Data for the chart
const data = [
  { name: "Page A", uv: 4000 },
  { name: "Page B", uv: 3000 },
  { name: "Page C", uv: 2000 },
  { name: "Page D", uv: 2780 },
  { name: "Page E", uv: 1890 },
  { name: "Page F", uv: 2390 },
  { name: "Page G", uv: 3490 },
];

// Function to generate a triangular path
const getPath = (x, y, width, height) => {
  if (isNaN(x) || isNaN(y) || isNaN(width) || isNaN(height)) return "";
  return `M${x},${y + height} L${x + width / 2},${y} L${x + width},${
    y + height
  } Z`;
};

// Custom shape component for the bar
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} fill={fill} />;
};

const UserChart = () => {
  return (
    <div style={{ width: "200px", height: "150px", margin: 0, padding: 0 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0, // Removed bottom margin
          }}
        >
          <XAxis dataKey="name" tick={false} axisLine={false} />
          <YAxis tick={false} axisLine={false} />
          <Bar dataKey="uv" shape={<TriangleBar />} label={false}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserChart;
