import React from 'react';
import fotoPerfil from './images/PERFIL.svg'; 
import img1 from './images/git.svg';
import img2 from './images/linke.svg';
import img3 from './images/gmail.svg';
import img4 from './images/zap.svg';
import ComputerIcon from './ComputerIcon';
import './Inicio.css'; 

function Inicio() {
  return (
    <header className="inicio">
      <div className="contatos-topo">
        <a href="https://github.com/pedro-rafaiel" target="_blank" rel="noopener noreferrer">
          <img src={img1} alt="GitHub" className="ctt-img" />
        </a>
        <a href="https://www.linkedin.com/in/pedro-rafael-pereira-de-oliveira-973a25266/" target="_blank" rel="noopener noreferrer">
          <img src={img2} alt="LinkedIn" className="ctt-img" />
        </a>
        <a href="mailto:pedrorafaelpereiradeoliveira@gmail.com?subject=Assunto%20da%20Mensagem&body=Texto%20da%20mensagem" target="_blank" rel="noopener noreferrer">
          <img src={img3} alt="Gmail" className="ctt-img" />
        </a>
        <a href="https://wa.me/5588992055854" target="_blank" rel="noopener noreferrer">
          <img src={img4} alt="WhatsApp" className="ctt-img" />
        </a>
      </div>
      <div className="perfil-container">
        <div className="perfil-texto">
          <h2 className="perfil-eu">Pedro Rafael<ComputerIcon /></h2>
          <h2 className="perfil-titulo">Desenvolvedor Full-Stack</h2>
          <h3 className="perfil-subtitulo">Node.js | React | C#</h3>
        </div>
        <img src={fotoPerfil} alt="Foto do perfil" className="perfil-img" />
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#sobre-mim">Sobre Mim</a></li>
          <li><a href="#projetos">Projetos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Inicio;
