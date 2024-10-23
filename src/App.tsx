import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/pages/navbar'
import About from './assets/pages/about';
import Contact from './assets/pages/contact'
import Education from './assets/pages/education';
import Blog from './assets/pages/blog';
import Gallery from './assets/pages/gallery';
import VideoBlog from './assets/pages/Videoblog';
import Project from './assets/pages/project';
import Home from './assets/pages/Home';// Ensure this exists or remove
import Footer from './assets/pages/Footer'; // Ensure this exists or remove


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Corrected Navbar component */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page as default */}
          <Route path="/footer" element={<Footer />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/videoblog" element={<VideoBlog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/project" element={<Project />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
