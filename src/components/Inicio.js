import React from 'react';
import fotoPerfil from './images/PERFIL.svg'; 
import './Inicio.css'; 

function Inicio() {
  return (
    <header className="inicio">
      <div className="perfil-container">
        <h2 className="perfil-titulo">Desenvolvedor Full-Stack</h2>
        <img src={fotoPerfil} alt="Foto do perfil" className="perfil-img" />
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#sobre-mim">Sobre Mim</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contatos">Contatos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Inicio;