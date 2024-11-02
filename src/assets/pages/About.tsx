import React from 'react';
import './about.css';
import profileImage from "../images/Photo1_Headshot_Thumbnail (1).png";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="intro-heading">
        Hi I'm Sahil I'm an 
        <span className="highlight-bold"> Architect</span> <br /> turned <span className="highlight-bold">Product Designer</span>
      </h1>
      <img src={profileImage} alt="Sahil Volvaikar" className="profile-image" />

      {/* Background Section */}
      <div className="background-section">
        <h2 className="background-title">Background</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3 className="timeline-degree">Masters in Interaction and Experience Design</h3>
            <p className="timeline-institution">University of Limerick</p>
            <p className="timeline-dates">2024 - Present</p>
          </div>
          <div className="timeline-item">
            <h3 className="timeline-degree">Bachelors of Architecture</h3>
            <p className="timeline-institution">Goa University</p>
            <p className="timeline-dates">2017 - 2022</p>
          </div>
          <div className="timeline-item">
            <h3 className="timeline-degree">Higher Secondary Education</h3>
            <p className="timeline-institution">Goa University</p>
            <p className="timeline-dates">2017 - 2022</p>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="work-experience-section">
        <h2 className="work-experience-title">Work Experience</h2>
        <div className="work-experience-cards">
          <div className="work-experience-card">
            <h3 className="work-experience-position">Senior Product Designer - MOCI</h3>
            <p className="work-experience-dates">March 2024 - August 2024 (6 Months)</p>
            <p className="work-experience-description">
              As a Senior Product Designer, I was responsible for developing products to the manufacturing stage while also innovating new product designs. I worked closely with carpenters and other skilled professionals, overseeing the entire production process to ensure high-quality outcomes.
            </p>
          </div>
          <div className="work-experience-card">
            <h3 className="work-experience-position">Junior Architect Part Time - Reira Group</h3>
            <p className="work-experience-dates">January 2022 - July 2024 (2+ Years)</p>
            <p className="work-experience-description">
              I produced precise architectural working drawings while ensuring adherence to project specifications and collaborated closely with senior team members on design projects, contributing creative solutions to enhance the overall design process.
            </p>
          </div>
          <div className="work-experience-card">
            <h3 className="work-experience-position">Junior Architect - Raya Shankwalker Architects</h3>
            <p className="work-experience-dates">May 2023 - Working (9 Months)</p>
            <p className="work-experience-description">
              I have experience producing detailed architectural working drawings, collaborating with senior team members on both architectural and interior design projects, and contributing creative solutions. Skilled in creating presentation drawings using Adobe Photoshop and InDesign, I am proficient in visual communication.
            </p>
          </div>
          <div className="work-experience-card">
            <h3 className="work-experience-position">Architectural Internship - Devra Architects</h3>
            <p className="work-experience-dates">January 2021 - May 2021 (5 Months)</p>
            <p className="work-experience-description">
              I produced detailed architectural working drawings and collaborated with senior team members on architectural and interior design projects. Additionally, I conducted material research to ensure appropriate selections for various projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
