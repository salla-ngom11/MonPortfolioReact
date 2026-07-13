import React from 'react';
import { Link } from 'react-scroll';
import ThemeToggle from '../ThemeToggle'; 
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="nav-logo">Salla NGOM</div>
      <ul className="nav-menu">
        <li><Link to="hero" smooth={true} duration={500}>Accueil</Link></li>
        <li><Link to="about" smooth={true} duration={500}>À propos</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Compétences</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projets</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
      {/* Intégration du bouton */}
      <div className="nav-theme-toggle">
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      </div>
    </nav>
  );
};

export default Navbar;