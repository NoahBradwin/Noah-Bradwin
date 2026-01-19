import React from 'react';
import './Projects.css';

function Projects() {
  const projectData = [
    {
      title: "Logistics Analytics Pipeline",
      description: "Built an end-to-end data solution to analyze delivery performance and driver efficiency. Designed a Star Schema in PostgreSQL (300K+ records) and developed a Python ETL pipeline to feed a Power BI dashboard.",
      tech: ["PostgreSQL", "Python", "Power BI", "ETL", "Data Modeling"],
      link: "https://github.com/NoahBradwin/Company-Sales-Insights"
    },
    {
      title: "Personal Portfolio Website",
      description: "Engineered a high-performance single-page application using React and Vite to master modular component architecture. Containerized the development environment with Docker to ensure consistent cross-platform deployment and build reliability.",
      tech: ["React", "Vite", "CSS3", "JavaScript", "UX/UI Design"],
      link: "https://github.com/NoahBradwin/Portfolio"
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="page-title">Featured Projects</h1>
      
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            
            <div className="project-header">
              <h2>{project.title}</h2>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              <h4>Technologies</h4>
              <div className="tech-tags">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-links">
               <a href={project.link} target="_blank" className="project-btn">View Code</a>
            </div> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;