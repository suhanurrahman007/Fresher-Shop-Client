"use client";
import ProductCard from "@/app/(mainLayout)/shop/ProductCard";
import useProducts from "@/components/hooks/useProducts";
import React, { useMemo } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  FaShoppingCart,
  FaApple,
  FaTv,
  FaHome,
  FaFutbol,
  FaTshirt,
  FaRegStar,
} from "react-icons/fa"; // Import icons

const product_type = [
  { name: "All", icon: <FaShoppingCart /> },
  { name: "Personal care", icon: <FaApple /> },
  { name: "Electronics", icon: <FaTv /> },
  { name: "Home", icon: <FaHome /> },
  { name: "Sports", icon: <FaFutbol /> },
  { name: "Accessories", icon: <FaRegStar /> },
  { name: "Casual", icon: <FaTshirt /> },
  { name: "Electronics", icon: <FaTv /> },
  { name: "Home", icon: <FaHome /> },
  { name: "Sports", icon: <FaFutbol /> },
  { name: "Accessories", icon: <FaRegStar /> },
  { name: "Casual", icon: <FaTshirt /> },
];

const ProductAll = () => {
  const [products] = useProducts();

  // Memoizing the Tab components to optimize performance
  const tabs = useMemo(
    () =>
      product_type.map((category, index) => (
        <Tab
          key={index}
          className="cursor-pointer py-2 px-4 text-left hover:bg-purple-400 hover:text-blue-900 rounded-md transition-all"
          selectedClassName="bg-purple-900 text-purple-200 font-bold flex items-center gap-2"
        >
          <div className="flex items-center gap-2">
            <span className="text-purple-400">{category.icon}</span>
            {category.name}
          </div>
        </Tab>
      )),
    []
  );

  return (
    <div className="container mx-auto py-4 flex flex-col lg:flex-row">
      <Tabs className="flex flex-col lg:flex-row w-full">
        {/* Fixed and Scrollable TabList */}
        <TabList className="w-full lg:w-1/4 bg-[#000C21] text-white p-4 rounded-md shadow-md space-y-2 sticky top-[70px] overflow-y-auto max-h-screen">
          {tabs}
        </TabList>

        {/* Scrollable Tab Panels */}
        <div className="w-full lg:w-3/4 px-5 pt-4 overflow-y-auto">
          {product_type.map((type, index) => (
            <TabPanel key={index}>
              <h2 className="text-2xl font-bold mb-1 text-purple-200">
                {type.name === "All"
                  ? "Complete Collection"
                  : `${type.name} Products`}
              </h2>
              <p className="text-gray-600 text-sm mb-7">
                Browse through our wide range of {type.name.toLowerCase()}{" "}
                products and find the best deals for you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter((product) =>
                    type.name === "All"
                      ? true
                      : product.product_type.toLowerCase() ===
                        type.name.toLowerCase()
                  )
                  .map((product) => (
                    <ProductCard key={product._id} item={product} />
                  ))}
              </div>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default ProductAll;
