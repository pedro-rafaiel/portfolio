import React, { useState } from 'react';
import './Projetos.css';

function Projetos({ projects }) {
  return (
    <section id="projetos" className="projetos">
      <h2>Projetos</h2>
      <div className="projetos-container">
        {projects.map((project, index) => (
          <ProjetoCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjetoCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`projeto-card ${isOpen ? 'open' : 'closed'}`}>
      <h3>{project.title}</h3>
      <button className="toggle-button" onClick={toggleDetails}>
        {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && (
        <div className="project-details">
          <p><strong>Linguagens:</strong> {project.languages.join(', ')}</p>
          <p>{project.description}</p>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>
      )}
    </div>
  );
}

export default Projetos;
