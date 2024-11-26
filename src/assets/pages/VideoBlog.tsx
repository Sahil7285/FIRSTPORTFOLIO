import React from 'react';
import './videoblog.css';

// Correcting image imports with valid variable names
import scene1 from "../images/WhatsApp Image 2024-11-25 at 8.47.32 PM.jpeg";
import scene2 from "../images/WhatsApp Image 2024-11-25 at 8.47.48 PM.jpeg";
import scene3 from "../images/WhatsApp Image 2024-11-25 at 8.50.34 PM.jpeg";
import scene4 from "../images/WhatsApp Image 2024-11-25 at 8.47.34 PM (1).jpeg";
const VideoBlog: React.FC = () => {
  return (
    <div className="videoblog-container">
      {/* Video Section */}
      <div className="video-wrapper">
        <a
          href="https://youtu.be/f4ZAMhef5HI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.youtube.com/vi/f4ZAMhef5HI/0.jpg"
            alt="Video Thumbnail"
            className="video-thumbnail"
          />
        </a>
      </div>

      {/* Text Section */}
      <div className="text-section">
        {/* Card for Title and Description */}
        <div className="text-card">
          <h1 className="video-title">Spaghetti Commercial</h1>
          <p className="video-description">
          Experience the rich taste and effortless cooking of Daily Basics Spaghetti, bringing joy to your everyday meals in every bite.
          </p>
        </div>

        {/* Card for Planning and Execution */}
        <div className="text-card">
          <h2 className="planning-title">Planning and Execution</h2>
          <p className="planning-entry">
            Our group collaborated to plan and shoot a spaghetti commercial. The storyline revolved around a man searching for a good brand of spaghetti in a store. He ultimately discovers the "Daily Basics" spaghetti and starts cooking it. The cooking scenes were shot using two phone cameras: an iPhone 15 and an iPhone 15 Pro.
          </p>
          <p className="planning-entry">
            We used the iPhone 15 Pro on a tripod to capture close-up side-angle shots, while the iPhone 15 was used for top-down shots of the cooking process. I managed the lighting for the shoot, and since it was set up indoors, I had full control over the lighting environment. To create a cosy ambience, I set up warm-toned lights on either side to act as fill lights, ensuring the scene was well-lit and visually appealing.
          </p>
          <p className="planning-entry">
            The storyline highlighted the process of making pasta, emphasizing how easy it is to prepare using "Daily Basics" spaghetti. The video concluded with beautifully plated pasta, featuring zoomed-in shots of the brand "Daily Basics" to reinforce the branding. This meticulous planning and execution allowed us to create a professional and engaging commercial.
          </p>
        </div>

        {/* Image Gallery Section */}
        <div className="text-card">
          <h2 className="gallery-title">Image Gallery</h2>
          <div className="image-gallery">
            <img
              src={scene1}
              alt="Scene 1: Aesthetic Thumbnail"
              className="gallery-image"
            />
            <img
              src={scene2}
              alt="Scene 2: Washing Vegetables"
              className="gallery-image"
            />
            <img
              src={scene3}
              alt="Scene 3: Chopping Vegetables"
              className="gallery-image"
            />
            <img
              src={scene4}
              alt="Scene 4: Plating Pasta"
              className="gallery-image"
            />
          </div>
        </div>

        {/* Card for Reflections */}
        <div className="text-card">
          <h2 className="reflection-title">Reflections on My Contribution</h2>
          <p className="reflection-entry">
            In our group project, my primary responsibility was managing the lighting for our spaghetti commercial. Since the shoot took place indoors, I had full control over the lighting setup, which allowed me to create a professional and visually appealing environment. I carefully adjusted the intensity, direction, and colour temperature of the lights to ensure they complemented the mood and tone of the commercial. For example, warm lighting was used to create a cosy and inviting atmosphere, aligning perfectly with the theme of comfort food. By eliminating shadows and highlighting the vibrant colours of the ingredients, I enhanced the visual quality of the footage, making it more engaging and polished.
          </p>
          <p className="reflection-entry">
            In addition to lighting, I took charge of capturing the top-down shots of the stove and pan. These shots were critical to the narrative, as they showcased key visuals, such as spaghetti being dropped into boiling water and the addition of fresh ingredients. My height advantage played a significant role in this task, as it allowed me to handle the camera with stability and precision. I ensured the shots were well-composed by focusing on symmetry and framing, which drew the viewer’s attention to the action in the centre of the frame.
          </p>
          <p className="reflection-entry">
            Both of these responsibilities were pivotal to the success of our project. The lighting setup elevated the overall production quality, while the carefully captured top-down shots added a dynamic and professional touch to the commercial. Together, these contributions helped us deliver a visually striking and compelling advertisement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoBlog;
