import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from "react";
import IMG1 from "../assets/Shikhar.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I ?</h1>
        <br />
        <p>
          I am a dedicated student at a prestigious engineering institute,
          pursuing a <b>Bachelor of Technology</b> in{" "}
          <b>Information Technology</b>. My relentless pursuit of opportunities
          drives me to continuously enhance my skills and contribute
          wholeheartedly to the professional arena. I firmly believe that
          unwavering commitment and consistent effort are the cornerstones of
          success in any endeavor.
        </p>
        <br />
        <div display="flex">
          <Link to="/contact">
            <button className="btn">Contacts</button>
          </Link>
          <a
            href="https://drive.google.com/file/d/1Q5OPn48NAWo6MKr7AzCCZJF9WpJuUnUI/view"
            target="_blank"
          >
            <button className="btn btn-light">HIRE ME</button>
          </a>
        </div>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={IMG1} alt="img" />
          </div>
        </div>
        <p>
          <i>
            "I proudly lead a community of exceptional minds who unite under the
            banner of <b>Enigma</b> as its president.I have a strong belief in
            my abilities as a capable manager and leader. I recognize the
            importance of providing the necessary guidance and support to a
            community, acting as a steady anchor to propel it in the right
            direction. ✒️"
          </i>
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
