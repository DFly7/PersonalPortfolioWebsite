import React from 'react';
import './Home.css';
import '../App.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome, I'm Darragh Flynn</h1>
        <p className="subtitle">Crafting Code, Playing Chess, Solving Problems</p>
      </header>

      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer with expertise in building modern web applications.
          I love turning complex problems into simple, beautiful, and intuitive solutions.
        </p>
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">React</div>
          <div className="skill-item">TypeScript</div>
          <div className="skill-item">Node.js</div>
          <div className="skill-item">Python</div>
          <div className="skill-item">SQL</div>
          <div className="skill-item">AWS</div>
        </div>
      </section>

      <section className="featured-work">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project 1</h3>
            <p>A brief description of your first featured project.</p>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>A brief description of your second featured project.</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Get In Touch</h2>
        <p>Interested in working together? Let's connect!</p>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:your.email@example.com">Email</a>
        </div>
      </section>
    </div>
  );
};

export default Home; 