import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import logoIcon from '../images/Photo1_Headshot_Thumbnail (1).png';

const Navbar: React.FC = () => {
  const location = useLocation(); // To apply active styling to the current route

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Icon Section */}
        <Link to="/" className="navbar-icon">
          <img src={logoIcon} alt="Logo" className="icon-image" /> {/* Add the icon here */}
        </Link>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`navbar-link ${location.pathname === '/videoblog' ? 'active' : ''}`}>
            <Link to="/videoblog">Video Blog</Link> {/* Updated to match App.tsx */}
          </li>
          <li className={`navbar-link ${location.pathname === '/blog' ? 'active' : ''}`}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className={`navbar-link ${location.pathname === '/project' ? 'active' : ''}`}>
            <Link to="/project">Projects</Link> {/* Updated to match App.tsx */}
          </li>
          <li className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}>
            <Link to="/about">About Me</Link>
          </li>
          <li className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
