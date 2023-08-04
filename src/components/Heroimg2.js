import "./Heroimg2Styles.css";
import React, { Component } from "react";
import { FiChevronDown } from "react-icons/fi"; // Import the scroll-down icon
import { Link } from "react-scroll";

class Heroimg2 extends Component {
  render() {
    return (
      <div
        className="hero-img"
        style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
      >
        <div className="scroll-down">
          <Link
            to="content"
            smooth={true}
            duration={1000}
            offset={-80} // Adjust the offset as needed
          >
            <FiChevronDown className="scroll-icon" />
          </Link>
        </div>
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Heroimg2;
