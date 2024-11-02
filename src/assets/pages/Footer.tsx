import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section - Logo and About */}
        <div className="footer-left">
          <h2>Sahil Volvaikar</h2>
          <p className="tagline">Architect | Product Designer</p>
          <p className="about-us-title">About Me</p>
          <p className="about-us-description">
            Bringing creative visions to life through architecture and design.
          </p>
          <div className="contact-info">
            <p>Contact Me</p>
            <p>📞 +91 899776088</p>
            <p>✉️ 24134988@studentmail.ul.ie</p>
          </div>
        </div>

        {/* Middle Section - Information and Helpful Links */}
        <div className="footer-middle">
          <div className="footer-column">
            <h3>Information</h3>
            <ul>
              <li><a href="#about">About Me</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#video">Video</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section - Subscribe */}
        <div className="footer-right">
          <h3>Subscribe for Updates</h3>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your Email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Social Links and Copyright */}
      <div className="footer-bottom">
        <p>© 2024 Sahil Volvaikar. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
