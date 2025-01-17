"use client";
import BarChartAll from "@/components/Dashboard/Admin/AdminProfile/BarChartAll";
import RadarCharts from "@/components/Dashboard/Admin/AdminProfile/RadarChart";
import UserChart from "@/components/Dashboard/Admin/AdminProfile/UserChart/UserChart";
import useAuth from "@/components/hooks/useAuth";
import Image from "next/image";
import {
  BsBarChartFill,
  BsFillQuestionOctagonFill,
  BsThreeDots,
} from "react-icons/bs";
import { AiOutlineRadarChart } from "react-icons/ai";
import TopProduce from "@/components/Dashboard/Admin/AdminProfile/TopProduct/TopProduce";
import TotalPayment from "@/components/Dashboard/Admin/AdminProfile/TotalPayment/TotalPayment";
import StorageCard from "@/components/Dashboard/Admin/AdminProfile/StorageCard/StorageCard";
import Storage from "@/components/Dashboard/Admin/AdminProfile/StorageCard/Storage";
import BarChartComponent from "@/components/Dashboard/Admin/AdminProfile/BarChartComponent";
import ActiveUsers from "@/components/Dashboard/Admin/AdminProfile/ActiveUser/ActiveUsers";
import AdminFooter from "@/components/Dashboard/Admin/AdminProfile/ActiveUser/AdminFooter";

const AdminProfile = () => {
  const { user } = useAuth();
  const displayName = user?.displayName || "Admin";

  return (
    <div className="p-4 text-white space-y-9">
      <h2 className="text-2xl text-purple-300 font-bold -mb-4">
        Hi, <span className="text-orange-700">{displayName}</span> Welcome Back!
      </h2>
      {/* <Card /> */}
      <div className="container m-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
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
              <h1 className="text-4xl text-blue-600 font-bold leading-none">
                31°
              </h1>
              <p className="text-sm mt-1">32° / 25°</p>
            </div>
          </div>
        </div>
        {/* Total Customers Card */}
        <div className="p-4 bg-[#0D0D21] shadow-lg shadow-blue-950 h-44 rounded-md m-0">
          <div className="flex items-center gap-2 mb-0">
            <h2 className="text-md font-semibold">Total Customers</h2>
            <BsFillQuestionOctagonFill
              className="text-gray-500 text-md cursor-pointer"
              title="Total number of customers this month"
            />
          </div>
          <div className="flex justify-between  items-center p-0">
            <div className="m-0 space-y-3">
              <h1 className="text-5xl text-purple-200 font-bold">$47K</h1>
              <button
                className="badge badge-primary badge-outline disabled cursor-not-allowed py-2 px-4"
                title="Growth compared to last month"
              >
                +3.5%
              </button>
            </div>
            <div className="m-0 p-0">
              <UserChart />
            </div>
          </div>
        </div>
      </div>

      <div className="container m-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-4 bg-[#0D0D21] shadow-lg shadow-blue-950 space-y-3 rounded-md">
          {/* Header Section */}
          <div className="flex justify-between items-center">
            <h2 className="text-md font-semibold text-white">Report</h2>
            <BsBarChartFill
              className="text-purple-300 text-2xl cursor-pointer"
              title="More options"
            />
          </div>

          <div className="flex justify-between items-center">
            <BarChartAll />
          </div>
        </div>
        {/* Total Customers Card */}
        <div className="p-4 bg-[#0D0D21] shadow-lg shadow-blue-950 space-y-3 rounded-md">
          {/* Header Section */}
          <div className="flex justify-between items-center">
            <h2 className="text-md font-semibold text-white">Report</h2>
            <AiOutlineRadarChart
              className="text-blue-300 text-2xl cursor-pointer"
              title="More options"
            />
          </div>

          <div className="flex justify-between items-center">
            <RadarCharts />
          </div>
        </div>
      </div>

      <div className="container m-auto grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="col-span-3">
          <StorageCard />
        </div>
        <div className="col-span-2">
          <Storage />
        </div>
      </div>
      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <TopProduce />
        {/* Total Customers Card */}
        <TotalPayment />
      </div>

      <div className="container m-auto">
        <BarChartComponent />
      </div>
      <div className="container m-auto">
        <ActiveUsers />
        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminProfile;
