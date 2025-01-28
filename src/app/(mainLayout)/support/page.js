import { Banner } from "@/components/share/Banner";
import Container from "@/components/share/Container";
import React from "react";
import ServiceTools from "./ServiceTools/ServiceTools";
import Faq from "@/components/HomeDesign/Faq/Faq";
import Categories from "./Categories/Categories";
import Testimonial from "@/components/HomeDesign/Testimonial/Testimonial";

const Support = () => {
  return (
    <div className="mt-20 space-y-5">
      <Banner title={"Help & Support"} />
      <Container>
        <div className="">
          <ServiceTools />
          <Categories />
          <div className="pt-10">
            <Testimonial />
          </div>

          <Faq />
        </div>
      </Container>
    </div>
  );
};

export default Support;
