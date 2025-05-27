import "./FooterStyles.css";

import React from "react";
import {
  FaCopyright,
  FaDiscord,
  FaGithubSquare,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaPortrait,
  FaLink,
  FaSchool,
  FaBuilding
} from "react-icons/fa";
import { Icon } from "@iconify/react";
import codechefIcon from "@iconify-icons/simple-icons/codechef";
import gfgIcon from "@iconify-icons/simple-icons/geeksforgeeks";
import leetcodeIcon from "@iconify-icons/simple-icons/leetcode";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "#fff", marginRight: "0.8rem" }}
            />
            <div>
              <p>Uttar Pradesh</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "0.8rem" }}
              />
              +91 9235815099
            </h4>
          </div>
          <div className="mail">
            <a href="mailto:agrawalshikhar27@gmail.com" target="_blank">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "0.8rem" }}
                />
                agrawalshikhar27@gmail.com
              </h4>
            </a>
            <a
              href="https://drive.google.com/file/d/1YI_Q7S3oX2sSlYnDHP3Ff5jEZf6nLOZa/view?usp=drive_link"
              target="_blank"
            >
              <h4>
                <FaPortrait
                  size={20}
                  style={{ color: "#fff", marginRight: "0.8rem" }}
                />
                Resume
              </h4>
            </a>
            <h4>
              <FaSchool
                size={20}
                style={{ color: "#fff", marginRight: "0.8rem" }}
              />
              ABES Engineering College
            </h4>
            <h4>
                  <FaBuilding size={20} style={{ color: "#fff", marginRight: "0.8rem" }} />
                  Brightly: A Siemens Company
                </h4>
          </div>
        </div>
        <div className="right">
          <h4>About</h4>
          <p>
            I am a <b>Software Engineer</b> with nearly <b>2 years of experience</b> at <b>Siemens</b>,
            skilled in <b>Java</b>, <b>Selenium</b>, and <b>JavaScript</b>. I work across development and test
            automation to build reliable, high-quality applications. Passionate about learning, I strive to create
             impactful tech solutions through consistent growth and collaboration.
          </p>
          <div className="social">
            <h4>
              <FaLink
                size={17}
                style={{ color: "#fff", marginRight: "0.5rem" }}
              />
              Reach me:
            </h4>
            <a href="https://www.instagram.com/shikhar02_/" target="_blank">
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/shikhar-agrawal-4a2313202/"
              target="_blank"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://github.com/Shikhar2702" target="_blank">
              <FaGithubSquare
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="discordapp.com/users/797690681602080789" target="_blank">
              <FaDiscord
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
          <div>
            <h4>
              <FaLink
                size={17}
                style={{ color: "#fff", marginRight: ".5rem" }}
              />
              Coding Platforms:
            </h4>
            <a href="https://www.codechef.com/users/shikhar_27" target="_blank">
              <Icon
                icon={codechefIcon}
                width={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://leetcode.com/shikhar_27/" target="_blank">
              <Icon
                icon={leetcodeIcon}
                width={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a
              href="https://auth.geeksforgeeks.org/user/agrawalshikhar27/"
              target="_blank"
            >
              <Icon
                icon={gfgIcon}
                width={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
        <h3>
          <FaCopyright></FaCopyright>All rights reserved
        </h3>
      </div>
    </div>
  );
};

export default Footer;
