// src/WorkExperience.jsx
import React from 'react';
import { experienceData } from './data/user_info';
import './WorkExperience.css';

function WorkExperience() {
  return (
    <div className="work-container">
      <h1>Work Experience</h1>
      <div className="work-grid">
        
        {experienceData.map((job, index) => (
          <div key={index} className="work-card">
            <div className="work-header">
              <h3>{job.role}</h3>
              <span className="work-date">{job.date}</span>
            </div>
            
            <h4 className="company-name">{job.company}</h4>
            <p className="work-description">{job.description}</p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default WorkExperience;