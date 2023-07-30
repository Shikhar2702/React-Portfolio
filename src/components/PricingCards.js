import { Link } from "react-router-dom";
import "./PricingCardStyles.css";
import React from "react";

const PricingCards = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>-Skilled in-</h3>
          <span className="bar"></span>
          <p className="btc">Data Structures </p>
          <p>- Leetcode -</p>
          <p>- GeekForGeeks -</p>
          <p>- 1000+ questions -</p>
          <br />
          <Link to="/contact" className="btn">
            Connect
          </Link>
        </div>

        <div className="card">
          <h3>-Hands on-</h3>
          <span className="bar"></span>
          <p className="btc">Web Development</p>
          <p>- MERN -</p>
          <p>- UI/UX -</p>
          <p>- Resopnsive designs -</p>
          <br />
          <Link to="/contact" className="btn">
            Collaborate
          </Link>
        </div>

        <div className="card">
          <h3>-Rated in-</h3>
          <span className="bar"></span>
          <p className="btc">Competitive Programming</p>
          <p>- 250+ Questions -</p>
          <p>- 50+ Contests -</p>
          {/* <p>- 1600+ -</p> */}
          <br />
          <Link to="/contact" className="btn">
            Team Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
