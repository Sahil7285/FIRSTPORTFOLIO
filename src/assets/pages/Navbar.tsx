import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Namrata Mandal</h1> {/* Your name */}
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/latest-works">Latest Works</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;