// src/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 20;
      const y = (e.clientY - window.innerHeight / 2) / 20;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="home-wrapper" 
      style={{
        '--x': `${offset.x}px`,
        '--y': `${offset.y}px`
      }}
    >
      
      <div className="parallax-layer layer-back"></div>

      <div className="parallax-layer layer-mid"></div>

      <div className="parallax-layer layer-front"></div>

      <div className="home-container">
        <div className="hero-content">

          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="hero-name">Noah Bradwin</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Engineering the Future of <span className="highlight">Data</span> & <span className="highlight">Systems</span>.
          </h2>
          
          <p className="hero-description">
            Management Engineering Student @ UWaterloo. <br />
            Building scalable tools, optimizing complex workflows, and turning chaos into structure.
          </p>

          <div className="cta-buttons">
            <Link to="/projects" className="btn primary-btn">View Projects</Link>
            <Link to="/contact" className="btn secondary-btn">Contact Me</Link>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;