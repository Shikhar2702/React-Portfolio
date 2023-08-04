import "./ProjectCardsStyles.css";

import React from "react";
import WorkCardData from "./WorkCardData";
import ProjectCards from "./ProjectCards";

const Work = () => {
  return (
    <div className="Work-container">
      <p className="project-heading">
        <h1>Projects</h1>
        <br />
        <h4>Some of my works that are an integral part of my learning.</h4>
      </p>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <ProjectCards
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
