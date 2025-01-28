import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const BandwidthSaved = () => {
  const data = [
    { name: "Used", value: 2.69 },
    { name: "Saved", value: 35.75 },
  ];

  const COLORS = ["#374151", "#3B82F6"]; // Gray for used, Blue for saved

  return (
    <div
      data-aos="zoom-in-up"
      className="bg-[rgb(13,13,33)] p-4 space-y-5 shadow-blue-950 rounded-lg shadow-lg flex flex-col items-center"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-md font-semibold text-white">Bandwidth Saved</h2>
      </div>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          verticalAlign="bottom"
          align="center"
          iconSize={10}
          wrapperStyle={{ color: "#ffffff" }}
        />
      </PieChart>
      <p className="text-green-500 font-semibold mt-4">
        &#10003; 35.75 GB saved
      </p>
      <p className="text-gray-400 text-sm">38.44 GB total bandwidth</p>
      <div className="mt-4 flex justify-between w-full text-sm text-gray-400">
        <button className="text-gray-400 bg-gray-700 px-2 py-1 rounded-lg hover:bg-gray-600">
          Last 6 Months
        </button>
        <a href="#" className="text-blue-500 hover:underline">
          Help
        </a>
      </div>
    </div>
  );
};

export default BandwidthSaved;
