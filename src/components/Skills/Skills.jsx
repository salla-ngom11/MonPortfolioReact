import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaLaravel, FaReact, FaAndroid, FaSwift, FaDatabase, FaGithub } from 'react-icons/fa';
import { SiJoomla } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const categories = [
    {
      title: "Développement Web",
      items: [
        { name: 'HTML', icon: <FaHtml5 color="#E44D26" /> },
        { name: 'CSS', icon: <FaCss3Alt color="#264DE4" /> },
        { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
        { name: 'React', icon: <FaReact color="#61DAFB" /> },
        { name: 'PHP', icon: <FaPhp color="#777BB4" /> },
        { name: 'Laravel', icon: <FaLaravel color="#FF2D20" /> }
      ]
    },
    {
      title: "Mobile & Outils",
      items: [
        { name: 'Android', icon: <FaAndroid color="#3DDC84" /> },
        { name: 'Swift', icon: <FaSwift color="#F05138" /> },
        { name: 'MySQL', icon: <FaDatabase color="#4479A1" /> },
        { name: 'Joomla', icon: <SiJoomla color="#5091CD" /> },
        { name: 'GitHub', icon: <FaGithub color="#000" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <h1>Mes Compétences</h1>
      {categories.map((category, catIndex) => (
        <div key={catIndex} className="skills-category">
          <h2>{category.title}</h2>
          <div className="skills-grid">
            {category.items.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;