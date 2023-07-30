import "./FooterStyles.css";

import React from "react";
import {
  FaCopyright,
  FaDiscord,
  FaFacebook,
  FaGithubSquare,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaPortrait,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "#fff", marginRight: "1.8rem" }}
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
                style={{ color: "#fff", marginRight: "1.8rem" }}
              />
              +91 9235815099
            </h4>
          </div>
          <div className="mail">
            <a href="mailto:agrawalshikhar27@gmail.com">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "1.8rem" }}
                />
                agrawalshikhar27@gmail.com
              </h4>
            </a>
            <a href="https://drive.google.com/file/d/1v6qLcCzKrMsZwjEfJKh_idv7CeFZtQ8r/view?usp=sharing">
              <h4>
                <FaPortrait
                  size={20}
                  style={{ color: "#fff", marginRight: "1.8rem" }}
                />
                Resume
              </h4>
            </a>
          </div>
        </div>
        <div className="right">
          <h4>About</h4>
          <p>
            This is me, Shikhar Agrawal, an undergrad aspiring Software
            Developer.
          </p>
          <div className="social">
            <h4>Reach me :</h4>
            <a href="https://www.facebook.com/profile.php?id=100006352754782">
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.instagram.com/shikhar02_/">
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/shikhar-agrawal-4a2313202/">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://github.com/Shikhar2702">
              <FaGithubSquare
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="discordapp.com/users/797690681602080789">
              <FaDiscord
                size={30}
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
