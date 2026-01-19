// src/Resume.jsx
import React from 'react';
import './Resume.css';
import resumeImage from './assets/resume.jpg';

function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1>My Resume</h1>
        <p className="resume-intro">
          Below is a preview of my resume. You can also download it as a PDF.
        </p>

        <a 
          href="/Resume.pdf" 
          download="Noah_Bradwin_Resume.pdf" 
          className="btn download-btn"
        >
          Download PDF
        </a>
      </div>

      <div className="resume-image-wrapper">
        <img 
          src={resumeImage} 
          alt="Noah Bradwin Resume" 
          className="resume-img" 
        />
      </div>
    </div>
  );
}

export default Resume;