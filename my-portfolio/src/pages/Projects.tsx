import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A detailed description of your first project. Explain the problem it solves, technologies used, and your role in development.",
      image: "/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      liveLink: "https://project1.com",
      githubLink: "https://github.com/yourusername/project1"
    },
    {
      title: "Project 2",
      description: "Description of your second project. Highlight the unique features and challenges overcome during development.",
      image: "/project2.jpg",
      technologies: ["TypeScript", "Express", "PostgreSQL"],
      liveLink: "https://project2.com",
      githubLink: "https://github.com/yourusername/project2"
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-page">
      <header className="projects-header">
        <h1>My Projects</h1>
        <p>A collection of my recent work and personal projects</p>
      </header>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 