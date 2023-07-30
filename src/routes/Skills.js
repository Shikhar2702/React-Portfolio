import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import PricingCards from "../components/PricingCards";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="Skills" text="Some of my works" />
      <PricingCards />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
