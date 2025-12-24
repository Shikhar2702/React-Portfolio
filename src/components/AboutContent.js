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
          I am a passionate and results-driven <b>Software Development Engineer in Test</b> with solid
          professional experience at <b>Siemens (Brightly)</b>. With a strong foundation in <b>Java</b> and
          <b>test automation using Selenium</b>, I specialize in ensuring the quality, reliability, and scalability
          of software solutions. Driven by continuous learning and innovation, I consistently refine my skills and
          contribute meaningfully to high-impact projects. I believe that <b>dedication</b>, <b>curiosity</b>, and
          <b>consistent effort</b> are key to thriving in the ever-evolving tech landscape.
        </p>

        <br />
        <div display="flex">
          <Link to="/contact">
            <button className="btn">Connect</button>
          </Link>
          <a
            href="https://drive.google.com/file/d/1R7TzcQyaZ6G-Nof4qQq3c7yXevDrDKiX/view?usp=drive_link"
            target="_blank"
          >
            <button className="btn btn-light">My Resume</button>
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
            "I proudly led a community of exceptional minds who unite under the
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
