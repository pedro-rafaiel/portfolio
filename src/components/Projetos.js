import React, { useState, useEffect } from 'react';
import './Projetos.css';
import setaDireita from './images/setaDireita.svg';
import setaEsquerda from './images/setaEsquerda.svg';

function Projetos({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setIsOpen(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, projects.length - 1));
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') goToPrevious();
      if (event.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projetos" className="projetos">
      <h2 className="sublinhar">Projetos</h2>

      <div className="carousel-container">
        <div 
          className="nav-arrow nav-arrow-left" 
          onClick={goToPrevious} 
          style={{ visibility: currentIndex === 0 ? 'hidden' : 'visible' }}
        >
          <img src={setaEsquerda} alt="Anterior" />
        </div>

        <div className="projetos-wrapper">
          <div 
            className="projetos-container"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => {
              const isFocused = index === currentIndex;
              return (
                <div 
                  key={index} 
                  className={`projeto-card ${isFocused ? 'focused' : ''} ${isOpen && isFocused ? 'open' : ''}`} 
                  onClick={() => isFocused && setIsOpen(!isOpen)}
                >
                  <div className="projeto-header">
                    <img src={project.image} alt={project.title} className="projeto-image" />
                    <h3>{project.title}</h3>
                  </div>
                  <div className="project-details">
                    <p><strong>Linguagens:</strong> {project.languages.join(' • ')}</p>
                    <p>{project.description}</p>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">🔗 Ver no GitHub</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div 
          className="nav-arrow nav-arrow-right" 
          onClick={goToNext} 
          style={{ visibility: currentIndex === projects.length - 1 ? 'hidden' : 'visible' }}
        >
          <img src={setaDireita} alt="Próximo" />
        </div>
      </div>
    </section>
  );
}

export default Projetos;
