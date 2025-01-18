import OrderReport from "@/components/Dashboard/Admin/AdminProfile/AdminStats/OrderReport";
import Weather from "@/components/Dashboard/Admin/AdminProfile/AdminStats/Weather";
import AreaCharts from "@/components/Dashboard/Admin/AdminProfile/AreaChart";
import useAuth from "@/components/hooks/useAuth";
import Image from "next/image";
import React from "react";

const DeliveryCard = () => {
  const { user } = useAuth();
  return (
    <div className="flex space-x-5  rounded-lg shadow-lg shadow-blue-950">
      {/* Left Cards */}
      <div className="space-y-4 w-2/5">
        {/* Contributors */}
        <Weather />

        {/* Viewers */}
        <OrderReport />
      </div>

      {/* Right Chart */}
      <div className="w-3/5 bg-[#0D0D21] p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-purple-300 font-medium text-xl">Order Report</h4>
          <div className="flex items-center space-x-2 text-orange-500">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-orange-500"
              checked
              readOnly
            />
            <span>Order Saves</span>
          </div>
        </div>
        <div>
          <li className="flex items-center my-3">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="relative group">
                <Image
                  src={user?.photoURL}
                  width={500}
                  height={500}
                  className="size-[50px] bg-slate-500 object-cover rounded-full border-[2px] border-blue-600"
                  alt="avatar navigate ui"
                />
                {user && (
                  <>
                    <span className="size-3 bg-green-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                    <span className="size-3 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
                  </>
                )}
              </div>
            </label>
            <div className="ml-3">
              <p className="text-white font-semibold hover:text-blue-700 hover:underline">
                {user?.displayName}
              </p>
              <p className="text-gray-400 text-sm">{"Delivery Boy"}</p>
            </div>
            <span
              className={`ml-auto w-3 h-3 rounded-full ${
                user.status === "online"
                  ? "bg-green-500"
                  : user.status === "away"
                  ? "bg-orange-500"
                  : "bg-green-500"
              }`}
            ></span>
          </li>
        </div>
        <div className="mt-7">
          <AreaCharts />
        </div>
      </div>
    </div>
  );
};

export default DeliveryCard;
