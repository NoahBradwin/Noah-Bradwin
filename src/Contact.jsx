// src/Contact.jsx
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="page-title">Get In Touch</h1>
      
      <div className="contact-card">
        <p className="contact-intro">
          I'm currently looking for <strong>Co-op opportunities</strong> for Spring 2026. 
          Feel free to reach out if you'd like to chat about systems engineering, data analysis, or coffee!
        </p>

        <div className="contact-links">

          <a href="mailto:noah.bradwin@uwaterloo.ca" className="contact-row">
            <div className="icon-box email-icon">✉️</div>
            <div className="row-text">
              <h3>Email</h3>
              <span>noah.bradwin@uwaterloo.ca</span>
            </div>
            <div className="arrow">→</div>
          </a>

          <a href="https://www.linkedin.com/in/noah-bradwin" target="_blank" rel="noopener noreferrer" className="contact-row">
            <div className="icon-box linkedin-icon">in</div>
            <div className="row-text">
              <h3>LinkedIn</h3>
              <span>linkedin.com/in/noah-bradwin</span>
            </div>
            <div className="arrow">→</div>
          </a>

          <a href="https://github.com/NoahBradwin" target="_blank" rel="noopener noreferrer" className="contact-row">
            <div className="icon-box github-icon">code</div>
            <div className="row-text">
              <h3>GitHub</h3>
              <span>github.com/NoahBradwin</span>
            </div>
            <div className="arrow">→</div>
          </a>

        </div>
      </div>
    </div>
  );
}

export default Contact;