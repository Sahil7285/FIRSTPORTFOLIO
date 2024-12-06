import React from 'react';
import projectImage1 from "../images/p1.png";
import projectImage2 from "../images/p2.png";
import "./project.css";

const Project: React.FC = () => {
  return (
    <div className="projects-container">
      
      {/* Project 1 */}
      <div className="project-container">
        {/* Project Number */}
        <div className="project-number">01</div>

        {/* Project Content */}
        <div className="project-content">
          <div className="project-title-section">
            <h2 className="project-title">The Dream House.</h2>
          </div>

          <div className="project-details">
            <img src={projectImage1} alt="Dream House" className="project-image" />
            <p className="project-description">
            The project in Caranzalim, Goa, draws inspiration from the Indo-Portuguese Courtyard houses, which are iconic in the region due to the historical blending of indigenous Indian and Portuguese colonial architectural styles. These houses traditionally feature open central courtyards that allow natural light and air to flow freely through the structure, creating a sense of openness and connection with the surroundings. The courtyards also help in maintaining a comfortable indoor climate in the tropical climate of Goa.

In your case, while the design draws on these traditional principles, the visual focus is on contemporary architecture. This could mean integrating modern materials and design elements such as clean lines, minimalistic forms, glass facades, and open-plan layouts while still retaining the essence of the Indo-Portuguese style. The aim is to harmonize historical and cultural references with modern aesthetics, resulting in a functional yet visually striking space.

For instance, the courtyards might still be a central feature, but they could be enhanced with modern landscaping or water features, providing a refreshing contrast to the historical context. Similarly, while the exterior may evoke a sense of the old Portuguese charm, the interiors might incorporate cutting-edge design trends, technology, and materials to cater to contemporary tastes and lifestyles.
            </p>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project-container">
        {/* Project Number */}
        <div className="project-number">02</div>

        {/* Project Content */}
        <div className="project-content">
          <div className="project-title-section">
            <h2 className="project-title">Classroom Without Boundaries</h2>
          </div>

          <div className="project-details">
            <img src={projectImage2} alt="Classroom Without Boundaries" className="project-image" />
            <p className="project-description">
            The design concept for "Classroom Without Boundaries" aims to redefine the traditional approach to educational spaces by prioritizing flexibility, collaboration, and open communication. The core idea revolves around the removal of rigid walls and fixed boundaries between classrooms, creating an environment where students and faculty can freely interact and engage with each other. The design encourages the fluid exchange of ideas across disciplines, fostering a sense of community and collective learning.

The spaces are designed to be dynamic and adaptable. Large, open-plan classrooms are complemented by interactive areas such as studios, lounges, and break-out spaces, allowing students from both undergraduate and postgraduate levels to collaborate on projects, hold discussions, or simply interact informally. Flexible furniture and movable partitions further enhance the adaptability of the space, enabling it to be reconfigured based on the activity or number of people.

Outdoor spaces like courtyards or terraces are incorporated into the design to provide a change of environment, enabling students to work in natural settings, attend group discussions, or simply relax. The entire college is structured to encourage a seamless flow of movement, with circulation spaces blending into the learning zones, enhancing the spontaneous exchange of ideas.

By eliminating physical and conceptual barriers, "Classroom Without Boundaries" offers a progressive approach to learning, where creativity and collaboration thrive. This concept aims to create a truly immersive and engaging educational experience, breaking away from traditional models of isolated classrooms and embracing the future of interactive, open learning.

            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Project;
