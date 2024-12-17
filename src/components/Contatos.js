import React from 'react';
import './Contatos.css'; 

import img1 from './images/git.svg';
import img2 from './images/linke.svg';
import img3 from './images/gmail.svg';
import img4 from './images/zap.svg';

function Contatos() {
  return (
    <section id="contatos" className="contatos">
      <h1 className="ctt-title">Contatos</h1>
      <div className="ctt-container">
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
    </section>
  );
}

export default Contatos;
