import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <h1>Formation</h1>

      {/* Parcours Académique */}
      <div className="education-section">
        <h2>Parcours Académique</h2>
        <div className="education-card">
          <h3>Licence en Informatique - Développement d'applications web</h3>
          <p>Université Numérique Cheikh Hamidou Kane (UNCHK)</p>
          <small>2023 - Présent (Licence 3)</small>
        </div>
      </div>

      {/* Formations Certifiantes */}
      <div className="education-section">
        <h2>Formations Complémentaires</h2>
        <ul className="training-list">
          <li><strong>IA pour tous</strong> - ForceN</li>
          <li><strong>Marketing Digital</strong> - Formation certifiante</li>
          <li><strong>Robotique & Camp de Codage n°5</strong> - AGCCI</li>
          <li><strong>Initiation à l'Intelligence Artificielle</strong></li>
        </ul>
      </div>
    </section>
  );
};

export default Education;