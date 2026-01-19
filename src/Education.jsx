// src/Education.jsx
import React from 'react';
import './Education.css';

function Education() {
  const educationData = [
    {
      school: "University of Waterloo",
      degree: "Candidate for Honours Management Engineering, Co-op",
      date: "Sept 2025 - Present",
      location: "Waterloo, ON",
      gpa: "92.8% Cumulative Average",
      scholarships: [
        "University of Waterloo President's Scholarship of Distinction",
        "Shoukry Saleh Memorial Scholarship for Management Engineering",
      ],
      courses: [
        "Linear Algebra for Engineering",
        "Calculus I & II",
        "Intro to Computer Programming (Python)",
        "Management Engineering Concepts (HCI, Excel VBA, Figma)"
      ]
    }
  ];

  return (
    <div className="edu-container">
      <h1 className="page-title">Education</h1>
      
      <div className="edu-grid">
        {educationData.map((edu, index) => (
          <div key={index} className="edu-card">

            <div className="edu-header">
              <div className="edu-school-info">
                <h2>{edu.school}</h2>
                <h3 className="degree-text">{edu.degree}</h3>
              </div>
              <div className="edu-meta">
                <span className="edu-date">{edu.date}</span>
                <span className="edu-location">{edu.location}</span>
              </div>
            </div>

            <div className="gpa-container">
              <span className="gpa-badge">
                <span className="star-icon">★</span> {edu.gpa}
              </span>
            </div>

            <div className="edu-details">
              <h4>Scholarships & Awards</h4>
              <ul className="detail-list">
                {edu.scholarships.map((award, i) => (
                  <li key={i}>{award}</li>
                ))}
              </ul>
            </div>

            <div className="edu-details">
              <h4>Relevant Coursework (Terms 1A & 1B)</h4>
              <div className="course-tags">
                {edu.courses.map((course, i) => (
                  <span key={i} className="course-tag">{course}</span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;