import { Banner } from "@/components/share/Banner";
import Container from "@/components/share/Container";
import React from "react";
import ServiceTools from "./ServiceTools/ServiceTools";
import Faq from "@/components/HomeDesign/Faq/Faq";
import { CategoriesCard } from "./Categories/CategoriesCard";
import Categories from "./Categories/Categories";
import ContactUs from "../contactUs/page";

const Support = () => {
  return (
    <div className="mt-20 space-y-5">
      <Banner title={"Help & Support"} />
      <Container>
        <div className="">
          <ServiceTools />
          <Faq />
          <Categories />
          <ContactUs />
        </div>
      </Container>
    </div>
  );
};

export default Support;
