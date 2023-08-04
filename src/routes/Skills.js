import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import PricingCards from "../components/PricingCards";
import Work from "../components/Work";
import Img from "../assets/Skill.avif";
const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="" text="" backgroundImage={Img} />
      <PricingCards />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
