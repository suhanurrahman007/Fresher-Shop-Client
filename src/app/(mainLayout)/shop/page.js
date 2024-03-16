"use client"
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Container from "@/components/share/Container";
import useProducts from "@/components/hooks/useProducts";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import ProductCard from "./ProductCard";

const Shop = () => {
  const [products, refetch] = useProducts();
  const casual = products.filter((item) => item?.product_type === "casual");
  const accessories = products.filter(
    (item) => item?.product_type === "accessories"
  );
  const sports = products.filter((item) => item?.product_type === "sports");
  const home = products.filter((item) => item?.product_type === "home");
  const electronics = products.filter(
    (item) => item?.product_type === "electronics"
  );
  const personal_care = products.filter(
    (item) => item?.product_type === "personal_care"
  );

  const [pageNumber, setPageNumber] = useState(0);
  const perPage = 4; // Adjust the number of products per page as needed
  const totalPage = Math.ceil(products?.length / perPage);
  const totalCasualPage = Math.ceil(casual?.length / perPage);
  const totalAccessoriesPage = Math.ceil(accessories?.length / perPage);
  const totalSportsPage = Math.ceil(sports?.length / perPage);
  const totalHomePage = Math.ceil(home?.length / perPage);
  const totalElectronicsPage = Math.ceil(electronics?.length / perPage);
  const totalPersonal_carePage = Math.ceil(personal_care?.length / perPage);


  const handlePageChange = (num) => {
    setPageNumber(num);
  };

  const getPageItems = (productArray) => {
    const startIndex = pageNumber * perPage;
    const endIndex = startIndex + perPage;
    return productArray.slice(startIndex, endIndex);
  };

  return (
    <div className="mt-[77px] bg-[#ecfbe8] py-10">
      <Container>
        <Tabs>
          <TabList
            className={"flex flex-wrap gap-2 md:gap-5 justify-center mb-8 px-5"}
          >
            <Tab
              className={
                "font-bold py-2 px-4 text-sm rounded border border-purple-700 hover:bg-gradient-to-r from-blue-400 to-purple-500 "
              }
            >
              All
            </Tab>
            <Tab
              className={
                "font-bold py-2 px-4 text-sm rounded border border-purple-700 hover:bg-gradient-to-r from-blue-400 to-purple-500 "
              }
            >
              Casual
            </Tab>
            <Tab
              className={
                "font-bold py-2 px-4 text-sm rounded border border-purple-700 hover:bg-gradient-to-r from-blue-400 to-purple-500 "
              }
            >
              Accessories
            </Tab>
            <Tab
              className={
                "font-bold py-2 px-4 text-sm rounded border border-purple-700 hover:bg-gradient-to-r from-blue-400 to-purple-500 "
              }
            >
              Sports
            </Tab>
            <Tab
              className={
                "font-bold py-2 px-4 text-sm rounded border border-purple-700 hover:bg-gradient-to-r from-blue-400 to-purple-500 "
              }
            >
              Home
            </Tab>
            <Tab
              className={
                "font-bold py-2 px-4 text-sm rounded border border-purple-700 hover:bg-gradient-to-r from-blue-400 to-purple-500 "
              }
            >
              Electronics
            </Tab>
            <Tab
              className={
                "font-bold py-2 px-4 text-sm rounded border border-purple-700 hover:bg-gradient-to-r from-blue-400 to-purple-500 "
              }
            >
              Personal care
            </Tab>
          </TabList>

          {/* Render TabPanels */}
          <TabPanel>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mx-auto">
                {getPageItems(products).map((item) => (
                  <ProductCard item={item} key={item?._id} />
                ))}
              </div>
            </div>
            {/* Pagination controls */}
            {products?.length > perPage && (
              <PaginationControls
                currentPage={pageNumber}
                totalPages={totalPage}
                onPageChange={handlePageChange}
              />
            )}
          </TabPanel>

          <TabPanel>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mx-auto">
                {getPageItems(casual).map((item) => (
                  <ProductCard item={item} key={item?._id} />
                ))}
              </div>
            </div>
            {casual?.length > perPage && (
              <PaginationControls
                currentPage={pageNumber}
                totalPages={totalCasualPage}
                onPageChange={handlePageChange}
              />
            )}
          </TabPanel>
          <TabPanel>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mx-auto">
                {getPageItems(accessories).map((item) => (
                  <ProductCard item={item} key={item?._id} />
                ))}
              </div>
            </div>
            {accessories?.length > perPage && (
              <PaginationControls
                currentPage={pageNumber}
                totalPages={totalAccessoriesPage}
                onPageChange={handlePageChange}
              />
            )}
          </TabPanel>
          <TabPanel>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mx-auto">
                {getPageItems(sports).map((item) => (
                  <ProductCard item={item} key={item?._id} />
                ))}
              </div>
            </div>
            {sports?.length > perPage && (
              <PaginationControls
                currentPage={pageNumber}
                totalPages={totalSportsPage}
                onPageChange={handlePageChange}
              />
            )}
          </TabPanel>
          <TabPanel>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mx-auto">
                {getPageItems(home).map((item) => (
                  <ProductCard item={item} key={item?._id} />
                ))}
              </div>
            </div>
            {home?.length > perPage && (
              <PaginationControls
                currentPage={pageNumber}
                totalPages={totalHomePage}
                onPageChange={handlePageChange}
              />
            )}
          </TabPanel>
          <TabPanel>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mx-auto">
                {getPageItems(electronics).map((item) => (
                  <ProductCard item={item} key={item?._id} />
                ))}
              </div>
            </div>
            {electronics?.length > perPage && (
              <PaginationControls
                currentPage={pageNumber}
                totalPages={totalElectronicsPage}
                onPageChange={handlePageChange}
              />
            )}
          </TabPanel>
          <TabPanel>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mx-auto">
                {getPageItems(personal_care).map((item) => (
                  <ProductCard item={item} key={item?._id} />
                ))}
              </div>
            </div>
            {personal_care?.length > perPage && (
              <PaginationControls
                currentPage={pageNumber}
                totalPages={totalPersonal_carePage}
                onPageChange={handlePageChange}
              />
            )}
          </TabPanel>
        </Tabs>
      </Container>
    </div>
  );
};

// Pagination Controls Component
const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex select-none justify-center items-center gap-5 pt-7">
      {/* Left arrow */}
      <div
        onClick={() => onPageChange(currentPage - 1)}
        className={`bg-purple-200 hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-sky-100 px-4 py-4 rounded-full ${
          currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <FaArrowLeftLong />
      </div>

      {/* Render page numbers */}
      <div className="flex justify-center items-center gap-2">
        {[...Array(totalPages).keys()].map((page) => (
          <div
            key={page}
            onClick={() => onPageChange(page)}
            className={`cursor-pointer hover:scale-110 scale-100 transition-all duration-200 px-5 ${
              currentPage === page ? "bg-purple-700 text-white" : "bg-white"
            } border-sky-300  font-semibold text-gray-700   py-3 rounded-full`}
          >
            {page + 1}
          </div>
        ))}
      </div>

      {/* Right arrow */}
      <div
        onClick={() => onPageChange(currentPage + 1)}
        className={`bg-purple-200 hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-sky-100 px-4 py-4 rounded-full ${
          currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <FaArrowRightLong />
      </div>
    </div>
  );
};


export default Shop;
