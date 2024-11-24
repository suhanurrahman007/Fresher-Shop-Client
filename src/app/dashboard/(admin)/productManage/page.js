"use client";
import AddProduct from "@/components/Dashboard/Admin/Product/AddProduct";
import ProductManagement from "@/components/Dashboard/Admin/Product/ProductManagement";
import ProductNavbar from "@/components/Dashboard/Admin/Product/ProductNavbar";
import useProducts from "@/components/hooks/useProducts";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ProductManage = () => {
  const [products, refetch] = useProducts();
  return (
    <div className="p-6 min-h-screen text-white">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Products</h1>
        <AddProduct refetch={refetch} />
      </div>

      {/* Tabs Section */}
      <div className="rounded-lg shadow-lg p-4">
        <Tabs>
          {/* Tab List */}
          <TabList className="flex space-x-4 pb-2">
            <Tab className="px-4 py-2 bg cursor-pointer text-gray-300 hover:text-white border-b-2 border-transparent hover:border-blue-500">
              Produces
            </Tab>
            <Tab className="px-4 py-2 cursor-pointer text-gray-300 hover:text-white border-b-2 border-transparent hover:border-blue-500">
              Title 2
            </Tab>
          </TabList>

          {/* Product Navbar */}
          <ProductNavbar />

          {/* Tab Panels */}
          <TabPanel className="mt-4">
            <ProductManagement products={products} refetch={refetch} />
          </TabPanel>
          <TabPanel className="mt-4">
            <h2 className="text-lg font-medium">Any content 2</h2>
            <p className="text-gray-400 mt-2">
              Here is some placeholder content for Tab 2.
            </p>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductManage;
