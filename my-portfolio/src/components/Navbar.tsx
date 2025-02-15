import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">DF</Link>
      </div>
      
      <button 
        className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
        <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar; 