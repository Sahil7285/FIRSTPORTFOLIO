import React from 'react';
import reactLogo from '../images/Photo1_Headshot_Thumbnail.jpg';
import '../App.css'; // Adjust the path if your CSS file is located elsewhere

const Home: React.FC = () => {
  return (
    <>
      <div className="main-container">
        {/* Left Sidebar */}
        <aside className="left-sidebar">
          <ul className="social-links">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <div className="content">
          {/* Navbar */}
          <header className="header">
            <nav className="navbar">
              <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#education">Education</a></li>
              </ul>
            </nav>
          </header>

          {/* Hero Section */}
          <main className="hero">
            <img src={reactLogo} alt="Main Portrait" className="hero-image" />
            <h1 className="main-title">SAHIL VOLVAIKAR</h1>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
