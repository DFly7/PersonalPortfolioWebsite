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
          Student pursuing interests in AI, Data Science, and Software Engineering, with a focus on FinTech applications.  
          My current project involves developing a financial analysis tool using Python and expanding my knowledge of machine learning algorithms.  
          I am passionate about designing intuitive solutions for complex problems.
        </p>
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-item"><span>C++</span></div>
          <div className="skill-item"><span>Python</span></div>
          <div className="skill-item"><span>SQL</span></div>
          <div className="skill-item"><span>AWS</span></div>
          <div className="skill-item"><span>Swift</span></div>
          <div className="skill-item"><span>Google Cloud</span></div>
        </div>
      </section>

      <section className="featured-work">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Chess Engine</h3>
            <p>A C++ chess engine that uses a minimax algorithm to find the best move.</p>
          </div>
          <div className="project-card">
            <h3>Trading Bot</h3>
            <p>A Python trading bot that uses a machine learning algorithm to trade stocks.</p>
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