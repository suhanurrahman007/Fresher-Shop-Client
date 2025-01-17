"use client";
import React, { useState } from "react";
import { FaHandHoldingDollar } from "react-icons/fa6";
import useAuth from "@/components/hooks/useAuth";
import DeliveryStats from "@/components/Dashboard/DaliveryMen/DeliveryMenProfile/DeliveryStats/DeliveryStats";
import ProductOverview from "@/components/Dashboard/DaliveryMen/DeliveryMenProfile/ProductOverview/ProductOverview";
import TotalEarning from "@/components/Dashboard/DaliveryMen/DeliveryMenProfile/TotalEarning/TotalEarning";
import ActiveUsers from "@/components/Dashboard/Admin/AdminProfile/ActiveUser/ActiveUsers";
import AdminFooter from "@/components/Dashboard/Admin/AdminProfile/ActiveUser/AdminFooter";

const DeliveryMenProfile = () => {
  const { user } = useAuth();

  return (
    <div className="py-5 space-y-7 p-5 text-purple-200">
      <h2 className="text-2xl font-bold">
        Hi,{" "}
        <span className="text-blue-600">
          {user?.displayName ? user.displayName : "There"}
        </span>
        ! Welcome Back!
      </h2>

      <DeliveryStats />

      {/* Charts and Earnings Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        <ProductOverview />
        {/* Total Earnings */}
        <TotalEarning />
      </div>

      <div className="container m-auto">
        <ActiveUsers />
        <AdminFooter />
      </div>
    </div>
  );
};

export default DeliveryMenProfile;
