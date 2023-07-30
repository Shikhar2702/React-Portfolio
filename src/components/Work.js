import "./ProjectCardsStyles.css";

import React from "react";
import WorkCardData from "./WorkCardData";
import ProjectCards from "./ProjectCards";

const Work = () => {
  return (
    <div className="Work-container">
      <h1 className="project-heading">Projects</h1>
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
