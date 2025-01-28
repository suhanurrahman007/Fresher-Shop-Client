"use client";
import React from "react";
import { BrandCard } from "./BrandCard";
import useBrands from "@/components/hooks/useBrands";
import SectionTitle from "@/components/share/SectionTitle";
import Container from "@/components/share/Container";
import { Helmet } from "react-helmet";

const Brand = () => {
  const [brands] = useBrands();
  console.log(brands);

  return (
    <div className="mt-20 mb-10 flex justify-center items-center">
      <Helmet>
        <title>Brand - Fresher Shop</title>
      </Helmet>
      <Container>
        <SectionTitle
          header={"Our Brands"}
          miniHeader={"This is our shop products brands"}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 justify-items-center">
          {brands?.map((item) => (
            <BrandCard key={item?._id} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Brand;
