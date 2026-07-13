import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "Saytu Edu (PFE)",
      desc: "Plateforme éducative pour la gestion scolaire. (Projet réalisé en groupe)",
      tech: "Laravel, PHP, MySQL, React",
      link: "https://drive.google.com/file/d/1q0Fv8sivOTqvFcSKllmwO5GJxu9wuD85/view?usp=drive_link"
    },
    {
      title: "Application Météo",
      desc: "Consultation de la météo en temps réel par ville.",
      tech: "JavaScript, API Météo",
      link: "https://salla-ngom11.github.io/meteo/"
    },
    {
      title: "Calculatrice",
      desc: "Outil de calcul simple et ergonomique.",
      tech: "HTML, CSS, JavaScript",
      link: "https://salla-ngom11.github.io/calculatrice/"
    },
    {
      title: "Programme BestFriend",
      desc: "Formulaire interactif de demande d'amitié.",
      tech: "HTML, CSS, JavaScript",
      link: "https://salla-ngom11.github.io/salla/"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="projects" 
      className="projects"
    >
      <h1>Mes Projets</h1>
      <div className="projects-grid">
        {projectList.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <p><small><strong>Technos:</strong> {proj.tech}</small></p>
            <div className="project-links">
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                {proj.title === "Saytu Edu (PFE)" ? "Voir la vidéo de démo" : "Voir le projet"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;