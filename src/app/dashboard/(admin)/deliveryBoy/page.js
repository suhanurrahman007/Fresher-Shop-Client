"use client";
import DeliveryBoyManagement from "@/components/Dashboard/Admin/DeliveryBoyManagement/DeliveryBoyManagement";
import useDeliveryBoy from "@/components/hooks/useDeliveryBoy";
import ItemNavbar from "@/components/share/ItemNavbar";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const DeliveryBoy = () => {
  const [deliveryBoy, refetch] = useDeliveryBoy();
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="p-6 min-h-screen text-white">
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
              Delivery Boy History
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
          <ItemNavbar item={deliveryBoy} />

          {/* Tab Panels */}
          <TabPanel className="mt-4">
            <DeliveryBoyManagement deliveryBoy={deliveryBoy} refetch={refetch} />
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

export default DeliveryBoy;
