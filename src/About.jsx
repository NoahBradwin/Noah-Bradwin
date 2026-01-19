// src/About.jsx
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-wrapper">

      <div className="tech-background"></div>

      <div className="about-container">

        <div className="about-hero">
          <h1>
            Solving Problems at the Intersection of <span className="highlight">Data</span> & <span className="highlight">Operations</span>.
          </h1>
          <p className="mission-statement">
            I am a Management Engineering student at the University of Waterloo. 
            I don't just write code; I build tools that optimize systems, automate workflows, 
            and turn raw data into actionable decisions.
          </p>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="icon">📊</div>
            <h3>Data Analysis</h3>
            <p>Transforming complex datasets into clear insights using <strong>Python</strong>, <strong>Pandas</strong>, and <strong>SQL</strong> to drive decision-making.</p>
          </div>

          <div className="skill-card">
            <div className="icon">⚙️</div>
            <h3>Systems Design</h3>
            <p>Optimizing logistics and financial workflows with scalable <strong>PostgreSQL</strong> databases and <strong>VBA</strong> automation.</p>
          </div>

          <div className="skill-card">
            <div className="icon">🧠</div>
            <h3>Optimization</h3>
            <p>Applying <strong>Linear Algebra</strong> and <strong>Calculus</strong> to model real-world constraints and solve complex efficiency problems.</p>
          </div>

          <div className="skill-card">
            <div className="icon">🚀</div>
            <h3>Product Dev</h3>
            <p>Bridging the gap between engineering and user experience with <strong>React</strong>, <strong>Figma</strong>, and <strong>Interactive Prototyping</strong>.</p>
          </div>

        </div>

        <div className="about-footer">
          <p>
            When I'm not studying, I'm competing in the pool as a <strong>Varsity Swimmer</strong> 🏊‍♂️ 
            or exploring the latest updates in <strong>AI Technology</strong>.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;