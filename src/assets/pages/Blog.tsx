import React from 'react';
import profileImage from "../images/Photo1_Headshot_Thumbnail.jpg";
import aestheticImage from "../images/Photo2_Aesthetic_Thumbnail.jpg";
import passionImage from "../images/Photo3_Passion_Thumbnail.jpg";
import "./blog.css";

const Blog: React.FC = () => {
  return (
    <div className="blog-container">
      <div className="blog-entry">
        <img src={profileImage} alt="Headshot" className="blog-image" />
        <div className="blog-text-content">
          <h1 className="blog-title">Headshot</h1>
          <p className="blog-description">
            For this photo, I wanted a simple, professional look that brings out personality. Using just my iPhone 15 Pro, I set up the shot with natural light from a window and kept the styling minimal—a black turtleneck that keeps the focus on my face.
          </p>

          <h2 className="blog-subtitle">Technical Details</h2>
          <ul className="technical-details">
            <li><strong>Device:</strong> iPhone 15 Pro</li>
            <li><strong>Focal Length:</strong> 6.765 mm</li>
            <li><strong>Aperture (f-number):</strong> f/1.78</li>
            <li><strong>Exposure Time:</strong> 1/40 sec</li>
          </ul>
          <p className="blog-description">
            The wide aperture (f/1.78) created a soft blur in the background, making the face stand out. The exposure time (1/40 sec) was fast enough to capture sharp details in natural light.
          </p>

          <h2 className="blog-subtitle">Composition</h2>
          <p className="blog-description">
            I kept the pose simple, with my hand on my chin to add a thoughtful vibe. The neutral background and balanced framing help keep the attention on the subject without distractions.
          </p>

          <h2 className="blog-subtitle">Editing</h2>
          <p className="blog-description">
            I did minimal editing—adjusting contrast to highlight textures and slightly brightening the image. This added a polished feel without losing the natural look.
          </p>
        </div>
      </div>

      <div className="blog-entry">
        <img src={aestheticImage} alt="Aesthetic" className="blog-image" />
        <div className="blog-text-content">
          <h1 className="blog-title">Aesthetic</h1>
          <p className="blog-description">
            For this shot, I aimed to create a relaxed, natural look that feels both casual and polished. Using my iPhone 15 Pro, I relied on soft, natural lighting to bring out details without harsh shadows.
          </p>

          <h2 className="blog-subtitle">Technical Details</h2>
          <ul className="technical-details">
            <li><strong>Device:</strong> iPhone 15 Pro</li>
            <li><strong>Focal Length:</strong> 6.765 mm</li>
            <li><strong>Aperture (f-number):</strong> f/1.78</li>
            <li><strong>Exposure Time:</strong> 1/50 sec</li>
          </ul>
          <p className="blog-description">
            The wide aperture (f/1.78) created a gentle blur in the background, focusing on the face. The exposure time (1/50 sec) ensured a sharp, clear capture, especially useful in soft light.
          </p>

          <h2 className="blog-subtitle">Composition</h2>
          <p className="blog-description">
            I went for a comfortable pose with my hands under my chin to add warmth and a friendly vibe. The black polo shirt and neutral background kept the focus on the expression, enhancing the portrait's approachable feel.
          </p>

          <h2 className="blog-subtitle">Editing</h2>
          <p className="blog-description">
            Only minor edits were needed to adjust brightness and contrast, making the final image feel polished yet authentic. This shot highlights how a simple setup can produce a professional look with a personal touch.
          </p>
        </div>
      </div>

      <div className="blog-entry">
        <img src={passionImage} alt="Passion" className="blog-image" />
        <div className="blog-text-content">
          <h1 className="blog-title">Passion</h1>
          <p className="blog-description">
            This shot was all about using a single prop to express personality and passion. I wanted to create a bold image that blends creativity with a sense of mystery. Using my iPhone 15 Pro, I captured this shot with natural light to play with shadows and highlights.
          </p>

          <h2 className="blog-subtitle">Technical Details</h2>
          <ul className="technical-details">
            <li><strong>Device:</strong> iPhone 15 Pro</li>
            <li><strong>Focal Length:</strong> 6.765 mm</li>
            <li><strong>Aperture (f-number):</strong> f/1.78</li>
            <li><strong>Exposure Time:</strong> 1/832 sec</li>
          </ul>
          <p className="blog-description">
            The narrow exposure time (1/832 sec) helped capture sharp details and maintain contrast even in strong light. The wide aperture (f/1.78) allowed for a clear focus on the subject while softly fading the background.
          </p>

          <h2 className="blog-subtitle">Composition</h2>
          <p className="blog-description">
            For the composition, I held a shoe to cover half of my face, creating a split-image effect that adds a dramatic touch. The contrast between the bright light on one side and the shadow on the other gives the image depth and intensity, making it visually engaging.
          </p>

          <h2 className="blog-subtitle">Editing</h2>
          <p className="blog-description">
            A few adjustments to contrast and brightness were made to emphasize the shadows, giving the final image a strong, punchy feel. This simple yet striking setup shows how a unique idea and thoughtful composition can make an image stand out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
