import React from 'react';
import './About.css';

const About: React.FC = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "TypeScript", "HTML5", "CSS3", "JavaScript", "Redux"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "Python", "Django", "RESTful APIs"]
    },
    {
      category: "Database",
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
    },
    {
      category: "DevOps",
      technologies: ["AWS", "Docker", "CI/CD", "Git", "GitHub Actions"]
    }
  ];

  return (
    <div className="about-page">
      <header className="about-header">
        <div className="profile-container">
          <div className="profile-image">
            {/* Add your profile image here */}
            <img src="/profile.jpg" alt="Your Name" />
          </div>
          <h1>About Me</h1>
          <p className="tagline">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
        </div>
      </header>

      <section className="about-content">
        <div className="bio-section">
          <h2>My Journey</h2>
          <p>
            I'm a passionate full-stack developer with a love for creating elegant solutions 
            to complex problems. With [X] years of experience in web development, I've had 
            the opportunity to work on diverse projects that have shaped my expertise in 
            both frontend and backend technologies.
          </p>
          <p>
            My approach to development combines technical excellence with creative problem-solving. 
            I believe in writing clean, maintainable code and creating intuitive user experiences 
            that make a difference.
          </p>
        </div>

        <div className="experience-section">
          <h2>Professional Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>Senior Developer - Company Name</h3>
              <p className="timeline-date">2020 - Present</p>
              <p>Led development of multiple high-impact projects and mentored junior developers.</p>
            </div>
            <div className="timeline-item">
              <h3>Full Stack Developer - Company Name</h3>
              <p className="timeline-date">2018 - 2020</p>
              <p>Developed and maintained various web applications using modern technologies.</p>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-group">
                <h3>{skillGroup.category}</h3>
                <div className="skill-tags">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="interests-section">
          <h2>Beyond Coding</h2>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to 
            open-source projects, or sharing my knowledge through technical writing. I'm also 
            passionate about [Your Interests/Hobbies].
          </p>
        </div>
      </section>
    </div>
  );
};

export default About; 