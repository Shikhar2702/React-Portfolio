import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from "react";
import IMG1 from "../assets/img3.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quo
          officia! Laudantium reiciendis vel laborum ipsum architecto quas quasi
          itaque.
        </p>
        <Link to="/contact">
          <button className="btn">Contacts</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={IMG1} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
