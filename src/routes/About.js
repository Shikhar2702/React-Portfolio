import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import AboutContent from "../components/AboutContent";
const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2
        heading="ABOUT"
        text="I am a passionate software enthusiast with data structures, algorithms expertise, and web development exposure. Eager learner and problem solver."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
