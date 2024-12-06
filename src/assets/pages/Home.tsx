import React from "react";
import image3 from "../images/image2.png";
import image4 from "../images/p1.png";
import image5 from "../images/p2.png";
import "./home.css";

// Add the path to your CV file here
import cvFile from "../cv/Sahil CV.pdf"; // Update with the correct path

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="intro-section">
        <div className="intro-text">
          <h1 className="intro-headingg">Hello</h1>
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
          
          {/*  CV button with download functionality */}
          <a href={cvFile} download="Sahil CV.pdf">
            <button className="cv-button">CV</button>
          </a>
        </div>
        <img src={image3} alt="Sahil Volvaikar" className="profile-image" />
      </div>
      {/* Celebrated Projects Section Heading */}
      <h2 className="section-heading">Celebrated Projects</h2>

      <div className="projects-section">
        <div className="project-card">
          <img src={image4} alt="Project 1" className="project-image" />
          <p className="project-title">
            The Dream House
          </p>
          <p className="project-description">
            The site of the project is in Caranzalim Goa. The design concept revolves around the principles of Indo-Portuguese Courtyard houses. However, the visuals focus on contemporary architecture.
          </p>
        </div>
        <div className="project-card">
          <img src={image5} alt="Project 2" className="project-image" />
          <p className="project-title">
            School Without Boundaries
          </p>
          <p className="project-description">
            The site of the project is located on the campus of Goa University. The site has a beautiful view of the Indian Ocean at one end and is located on a cliff. It also has contours and is densely populated with trees. The main objective of the design process was to save as many trees as possible and build around them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;