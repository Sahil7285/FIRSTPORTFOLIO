import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/pages/navbar';
import About from './assets/pages/about';
import Contact from './assets/pages/contact';
import Education from './assets/pages/education';
import Blog from './assets/pages/blog';
import Gallery from './assets/pages/gallery';
import VideoBlog from './assets/pages/videoblog';
import Project from './assets/pages/project';
import Home from './assets/pages/home';
import Footer from './assets/pages/footer';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar /> {/* Navbar visible on all pages */}

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/videoblog" element={<VideoBlog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/project" element={<Project />} />
            <Route path="/education" element={<Education />} />
            <Route path="*" element={<Home />} /> {/* Redirect any unknown routes to Home */}
          </Routes>
        </main>

        <Footer /> {/* Footer visible on all pages */}
      </div>
    </Router>
  );
};

export default App;
