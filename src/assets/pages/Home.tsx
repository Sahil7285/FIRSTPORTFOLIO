import React from "react";
import image3 from "../images/image2.png";
import image4 from "../images/p1.png";
import image5 from "../images/p2.png";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="intro-section">
        <div className="intro-text">
          <h1 className="intro-heading">Hello</h1>
          <h2 className="intro-name">I’m Sahil Volvaikar</h2>
          <p className="intro-description">
            An Architect pursuing a Master's in Interaction and Experience Design, I bring
            strong skills in precision, creativity, and problem-solving. My background in
            architectural drawing and 3D visualization has honed my attention to detail.
            <br />
            <br />
            Upon completing my degree, I will have a deep understanding of interaction
            design, enabling me to create user-focused solutions. I am adaptable, eager to
            learn, and committed to delivering innovative results.
          </p>
          <button className="cv-button">CV</button>
        </div>
        <img src={image3} alt="Sahil Volvaikar" className="profile-image" />
      </div>
      {/* Celebrated Projects Section Heading */}
      <h2 className="section-heading">Celebrated Projects</h2>

      <div className="projects-section">
        <div className="project-card">
          <img src={image4} alt="Project 1" className="project-image" />
          <p className= "project-title">
            The Dream House
          </p>
          <p className="project-description">
          The site of the proect is in Caranzalim Goa. the design concept of the design revolves around the principals of Indo-postugese Courtyard houses. However the Visuals of the project focuses mainly on the contemporary Architecture
          </p>
        </div>
        <div className="project-card">
          <img src={image5} alt="Project 2" className="project-image" />
          <p className= "project-title">
            School Without Boundaries
          </p>
          <p className="project-description">
          The site of the proct is located in the campus of Goa unoversity. the site has beautiful view of the indian ocean at one end, and is located on a cliff. it also has contours. the soil is laterite soil which would help in the foundation process of the building. it is densely populated with trees and the main objective of the design process was to save as many trees as possible and to built around them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
