import React from "react";
import ContactUs from "./ContactUs";
import { Banner } from "@/components/share/Banner";
import Faq from "@/components/HomeDesign/Faq/Faq";
import OurTeams from "@/components/HomeDesign/OurTeam/OurTeam";

const Contact = () => {
  return (
    <div className="mt-20 space-y-5">
      <Banner title={"Contact Us"} />
      <ContactUs />
      <OurTeams />
      <Faq />
    </div>
  );
};

export default Contact;
