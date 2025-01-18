import Image from "next/image";
import React from "react";
import { BsFillQuestionOctagonFill, BsThreeDots } from "react-icons/bs";
import UserChart from "../UserChart/UserChart";

const Weather = () => {
  return (
    <div className="p-4 bg-[#0D0D21] shadow-lg shadow-blue-950 space-y-3 h-44 rounded-md">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-md font-semibold text-white">Weather</h2>
        <BsThreeDots
          className="text-gray-400 text-lg cursor-pointer"
          title="More options"
        />
      </div>

      <div className="flex justify-between items-center">
        {/* Weather Details Section */}
        <div className="flex items-center gap-4 mt-4">
          {/* Weather Icon */}
          <div>
            <Image
              width={70}
              height={70}
              className="object-cover"
              src="https://i.ibb.co/ncvF5Xj/weather-icon.png" // Corrected the URL
              alt="Weather Icon"
            />
          </div>

          {/* Location and Weather Conditions */}
          <div className="space-y-1 text-white">
            <h2 className="text-lg font-bold">New York City</h2>
            <div>
              <p className="text-sm text-orange-700">Sunny</p>
              <p className="text-xs text-gray-400">Precipitation: 50%</p>
            </div>
          </div>
        </div>

        {/* Temperature Section */}
        <div className="text-right text-white mt-3">
          <h1 className="text-4xl text-blue-600 font-bold leading-none">31°</h1>
          <p className="text-sm mt-1">32° / 25°</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
