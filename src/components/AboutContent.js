import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from "react";
import IMG1 from "../assets/Shikhar.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm a student of a reputed engineering institute pursuing Bachelor of
          technology in Information Technology. I always seek for opportunities
          to enhance in the work field by contributing wholeheartedly to it.
          Work and consistency are two most important attributes for a person to
          do well with his/her commitments. . I believe myself to be good at
          management and leadership also, as a community needs some anchors to
          propel in the correct direction.
        </p>
        <br />
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
