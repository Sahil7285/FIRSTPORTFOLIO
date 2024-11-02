import React from 'react';
import projectImage from "../images/p1.png";
import "./project.css";

const Project: React.FC = () => {
  return (
    <div className="project-container">
      {/* Project Number */}
      <div className="project-number">01</div>

      {/* Project Content */}
      <div className="project-content">
        <div className="project-title-section">
          <h2 className="project-title">The Dream House.</h2>
        </div>

        <div className="project-details">
          <img src={projectImage} alt="Dream House" className="project-image" />
          <p className="project-description">
            An Architect pursuing a Master's in Interaction and Experience Design, I bring strong skills in precision, creativity, and problem-solving. My background in architectural drawing and 3D visualization has honed my attention to detail. Upon completing my degree, I will have a deep understanding of interaction design, enabling me to create user-focused solutions. I am adaptable, eager to learn, and committed to delivering innovative results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
