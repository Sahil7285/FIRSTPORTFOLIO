// VideoBlog.tsx

import React from 'react';
import './videoblog.css';

const VideoBlog: React.FC = () => {
  return (
    <div className="videoblog-container">
      <div className="video-wrapper">
        <a
          href="https://www.youtube.com/watch?v=njX2bu-_Vw4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.youtube.com/vi/njX2bu-_Vw4/0.jpg"
            alt="Video Thumbnail"
            className="video-thumbnail"
          />
        </a>
      </div>
      <h1 className="video-title">Demo Video Title</h1>
      <p className="video-description">
        This is a description of the demo video. It provides an overview of the content, purpose, and any relevant information the viewer should know before watching.
      </p>
    </div>
  );
};

export default VideoBlog;
