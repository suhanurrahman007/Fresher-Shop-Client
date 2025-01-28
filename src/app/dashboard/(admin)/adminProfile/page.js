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
import Weather from "@/components/Dashboard/Admin/AdminProfile/AdminStats/Weather";
import OrderReport from "@/components/Dashboard/Admin/AdminProfile/AdminStats/OrderReport";

const AdminProfile = () => {
  const { user } = useAuth();
  const displayName = user?.displayName || "Admin";

  return (
    <div className="p-4 text-white space-y-9 overflow-y-auto">
      <h2 className="text-2xl text-purple-300 font-bold -mb-4">
        Hi, <span className="text-orange-700">{displayName}</span> Welcome Back!
      </h2>
      {/* <Card /> */}
      <div className="container m-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Weather />
        {/* Total Customers Card */}
        <OrderReport />
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
