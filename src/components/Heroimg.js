import "./HeroimgStyles.css";

import React from "react";

import IntroImg from "../assets/img8.avif";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi, I am a Software Developer</p>
        <h1>Shikhar Agrawal</h1>
        <p>
          An engineering student and technical enthusiast, know about me here.
        </p>
        <br />
        <div>
          <Link to="/skills" className="btn">
            Skills
          </Link>
          <Link to="/about" className="btn btn-light">
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
