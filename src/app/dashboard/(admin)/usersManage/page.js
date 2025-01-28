"use client";
import AddProduct from "@/components/Dashboard/Admin/Product/AddProduct";
import ProductManagement from "@/components/Dashboard/Admin/Product/ProductManagement";
import UserManagement from "@/components/Dashboard/Admin/User/UserManagement";
import useAllUser from "@/components/hooks/useAllUser";
import useProducts from "@/components/hooks/useProducts";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import useUser from "@/components/hooks/useUser";
import ItemNavbar from "@/components/share/ItemNavbar";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const UserManage = () => {
  const [allUser, refetch] = useAllUser()
  console.log(allUser);
  const [selectedTab, setSelectedTab] = useState(0); // Controlled tab state

  return (
    <div className="p-6 min-h-screen text-white overflow-y-auto">
      {/* Tabs Section */}
      <div className="rounded-lg shadow-lg p-4 bg-[#1a1a2eac]">
        <Tabs
          selectedIndex={selectedTab}
          onSelect={(index) => setSelectedTab(index)}
        >
          {/* Tab List */}
          <TabList className="flex space-x-2 pb-2">
            <Tab
              className="font-bold py-1 px-2 text-xs rounded border border-purple-700 hover:bg-gradient-to-r from-blue-400 to-purple-500"
              selectedClassName="bg-gradient-to-r from-blue-400 to-purple-500 text-white"
            >
              All User
            </Tab>
            <Tab
              className="font-bold py-1 px-2 text-xs rounded border border-purple-700 hover:bg-gradient-to-r from-blue-400 to-purple-500"
              selectedClassName="bg-gradient-to-r from-blue-400 to-purple-500 text-white"
            >
              Pricing Table
            </Tab>
            <Tab
              className="font-bold py-1 px-2 text-xs rounded border border-purple-700 hover:bg-gradient-to-r from-blue-400 to-purple-500"
              selectedClassName="bg-gradient-to-r from-blue-400 to-purple-500 text-white"
            >
              Shipping Rates
            </Tab>
            <Tab
              className="font-bold py-1 px-2 text-xs rounded border border-purple-700 hover:bg-gradient-to-r from-blue-400 to-purple-500"
              selectedClassName="bg-gradient-to-r from-blue-400 to-purple-500 text-white"
            >
              Tax Rates
            </Tab>
            <Tab
              className="font-bold py-1 px-2 text-xs rounded border border-purple-700 hover:bg-gradient-to-r from-blue-400 to-purple-500"
              selectedClassName="bg-gradient-to-r from-blue-400 to-purple-500 text-white"
            >
              Category Table
            </Tab>
          </TabList>

          {/* Product Navbar */}
          <ItemNavbar item={allUser} />

          {/* Tab Panels */}
          <TabPanel className="mt-4">
            <UserManagement users={allUser} refetch={refetch} />
          </TabPanel>
          <TabPanel className="mt-4">
            <p className="text-gray-300">Pricing Table content will go here.</p>
          </TabPanel>
          <TabPanel className="mt-4">
            <p className="text-gray-300">
              Shipping Rates content will go here.
            </p>
          </TabPanel>
          <TabPanel className="mt-4">
            <p className="text-gray-300">Tax Rates content will go here.</p>
          </TabPanel>
          <TabPanel className="mt-4">
            <p className="text-gray-300">
              Category Table content will go here.
            </p>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default UserManage;
