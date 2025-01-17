import Link from "next/link";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaHandHoldingDollar } from "react-icons/fa6";

const TotalEarning = () => {
  return (
    <div className="bg-[#0D0D21] rounded-lg p-4 shadow-lg shadow-blue-950">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-bold">Total Earning</h3>
        <Link href="#" className="text-blue-500 hover:underline">
          <BsThreeDots title="More options" />
        </Link>
      </div>

      {/* Earnings Summary */}
      <div className="card py-3 rounded-md shadow-xl text-center">
        <figure>
          <span
            className="text-7xl rounded-full p-5 bg-black text-purple-600"
            aria-label="Earnings Icon"
          >
            <FaHandHoldingDollar />
          </span>
        </figure>
        <p className="text-3xl font-bold text-purple-500 py-3">$120</p>
        <p className="text-xs text-gray-400">All-Time Total Earnings</p>
        <div className="px-10 py-3">
          <hr className="border-gray-700" />
        </div>
        <p className="py-2 text-sm text-gray-300">Total Revenue: $1,203</p>
        <p className="py-2 text-sm text-gray-300">My Earnings: $120</p>
      </div>
    </div>
  );
};

export default TotalEarning;
