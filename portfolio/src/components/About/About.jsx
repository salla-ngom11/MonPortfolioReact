import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h1>À propos</h1>
      <div className="about-container">
        <div className="about-text">
          <p>
            Je suis une développeuse web et mobile passionnée, actuellement en cours d'obtention de ma Licence. 
            J'aime relever des défis techniques et transformer des idées en solutions numériques concrètes.
          </p>
          <p>
            Mon approche combine rigueur technique (Laravel, Android, Swift) et souci du design. 
            Mon objectif est de créer des applications qui ne sont pas seulement fonctionnelles, 
            mais aussi intuitives et agréables pour l'utilisateur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;