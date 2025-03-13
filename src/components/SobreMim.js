import React from 'react';
import './SobreMim.css';

import img1 from './images/react.svg'; 
import img2 from './images/node.svg';
import img3 from './images/Python.svg';
import img4 from './images/js.svg';
import img5 from './images/ts.svg';
import img6 from './images/postgreesql.svg';
import img7 from './images/mysql.svg';
import img8 from './images/MongoDB.svg';
import img9 from './images/c.svg';
import img10 from './images/csharp.svg';

const languages = [
  { img: img9, alt: "C", link: "https://en.cppreference.com/w/c" },
  { img: img10, alt: "C#", link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { img: img1, alt: "React", link: "https://react.dev/" },
  { img: img2, alt: "Node.js", link: "https://nodejs.org/" },
  { img: img3, alt: "Python", link: "https://www.python.org/" },
  { img: img4, alt: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { img: img5, alt: "TypeScript", link: "https://www.typescriptlang.org/" },
  { img: img6, alt: "PostgreSQL", link: "https://www.postgresql.org/" },
  { img: img7, alt: "MySQL", link: "https://www.mysql.com/" },
  { img: img8, alt: "MongoDB", link: "https://www.mongodb.com/" },
];

function SobreMim() {
  return (
    <section id="sobre-mim" className="sobre-mim">
      <h2>Sobre Mim</h2>
      <p><strong>Nome:</strong> Pedro Rafael Pereira de Oliveira</p>
      <p><strong>Idade:</strong> 21</p>
      <p><strong>Formação:</strong> Técnico em Redes de Computadores | Graduando em Ciências da Computação - UFCA</p>
      
      <h3 className="experiencias-title">Experiências</h3>
      <ul>
        <p>Estágio de 2 meses integralmente na provedora de internet Aj-Net</p>
        <p>Bolsa de 6 meses pela BRISA Sociedade para o Desenvolvimento da Tecnologia da Informação</p>
      </ul>

      <h3 className="linguagens-title">Linguagens</h3>
      <div className="linguagens-container">
        {languages.map((language, index) => (
          <a key={index} href={language.link} target="_blank" rel="noopener noreferrer">
            <img src={language.img} alt={language.alt} className="linguagem-img" />
          </a>
        ))}
      </div>
    </section>
  );
}

export default SobreMim;
