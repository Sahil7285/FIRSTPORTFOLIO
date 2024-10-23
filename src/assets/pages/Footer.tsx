import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <p>&copy; {new Date().getFullYear()} Sahil Volvaikar. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
