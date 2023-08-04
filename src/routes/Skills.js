import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import PricingCards from "../components/PricingCards";
import Work from "../components/Work";
import Img from "../assets/Skills.jpg";
import "./Skilss.css";
const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2
        className="hero-container"
        heading="Skills & Projects"
        text=""
        backgroundImage={Img}
      />
      <PricingCards />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
