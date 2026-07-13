import React from 'react';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2026 Salla NGOM | Thiès, Sénégal</p>
      <p>Développeuse Web & Mobile • Étudiante • Passionnée de Technologie</p>
      <div className="footer-links">
        <a href="https://github.com/salla-ngom11" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="mailto:sallahngom@gmail.com">
          <FaEnvelope /> sallahngom@gmail.com
        </a>
        <a href="tel:+221771863441">
          <FaPhone /> +221 77 186 34 41
        </a>
      </div>
    </footer>
  );
};

export default Footer;