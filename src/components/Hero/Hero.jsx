import React from 'react';
import './Hero.css';
import profileImg from '../../assets/images/meeeee.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Salut, je suis <br /><br /><span className="highlight">Salla Ngom</span> 👋</h1>
        <div id="typing" className="typing-text"></div>
        <br />
        <h2>Développeuse Web & Mobile</h2>
        <p>
          Développeuse passionnée basée à Thiès, Sénégal. Je transforme les idées en 
          solutions web et mobiles modernes et j'aimerai approfondir mon expérience.
        </p>
        <br />
        
        <div className="hero-buttons">
          {/* Bouton Télécharger CV */}
        <a href="./Mon-CV-Salla.pdf" download="CV_Salla_Ngom.pdf" className="btn-primary">
          Télécharger mon CV
          </a>
          
         
        </div>
      </div>
      
      <div className="hero-image">
        <img src={profileImg} alt="Salla Ngom" />
      </div>
    </section>
  );
};

export default Hero;