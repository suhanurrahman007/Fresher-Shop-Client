/* eslint-disable no-shadow */
import React, { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";

const RADIAN = Math.PI / 180;
const data = [
  { name: "A", value: 80, color: "#ff0000" },
  { name: "B", value: 45, color: "#00ff00" },
  { name: "C", value: 25, color: "#0000ff" },
];
const cx = 150,
  cy = 200,
  iR = 50,
  oR = 100,
  value = 50;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total),
    length = (iR + 2 * oR) / 3,
    sin = Math.sin(-RADIAN * ang),
    cos = Math.cos(-RADIAN * ang);
  const r = 5,
    x0 = cx + 5,
    y0 = cy + 5,
    xba = x0 + r * sin,
    yba = y0 - r * cos,
    xbb = x0 - r * sin,
    ybb = y0 + r * cos,
    xp = x0 + length * cos,
    yp = y0 + length * sin;
  return (
    <>
      <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />
      <path
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        stroke="none"
        fill={color}
      />
    </>
  );
};

export default class OrderChart extends PureComponent {
  render() {
    return (
      <PieChart
        width={400}
        height={400}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {needle(value, data, cx, cy, iR, oR, "#d0d000")}
      </PieChart>
    );
  }
}
