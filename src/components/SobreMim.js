import React from 'react';
import './SobreMim.css'; // Adicione estilos personalizados aqui

import img1 from './images/react.svg'; // Substitua pelos caminhos corretos das suas imagens
import img2 from './images/node.svg';
import img3 from './images/Python.svg';
import img4 from './images/js.svg';
import img5 from './images/ts.svg';
import img6 from './images/postgreesql.svg';
import img7 from './images/mysql.svg';
import img8 from './images/MongoDB.svg';
import img9 from './images/c.svg';

function SobreMim() {
  return (
    <section id="sobre-mim" className="sobre-mim">
      <h2>Sobre Mim</h2>
      <p><strong>Nome:</strong> Pedro Rafael Pereira de Oliveira</p>
      <p><strong>Idade:</strong> 21</p>
      <p><strong>Formação:</strong> Técnico em Redes de Computadores | Graduando em Ciências da Computação - UFCA</p>
      <h3 className="experiencias-title">Experiências</h3> {/* Adicionado título para experiências */}
      <ul>
        <p>Estágio de 2 meses integralmente na provedora de internet Aj-Net</p>
        <p>Bolsa de 6 meses pela BRISA Sociedade para o Desenvolvimento da Tecnologia da Informação</p>
      </ul>
      <h3 className="linguagens-title">Linguagens</h3> {/* Classe para o título de linguagens */}
      <div className="linguagens-container">
        <img src={img9} alt="Linguagem 9" className="linguagem-img" />
        <img src={img1} alt="Linguagem 1" className="linguagem-img" />
        <img src={img2} alt="Linguagem 2" className="linguagem-img" />
        <img src={img3} alt="Linguagem 3" className="linguagem-img" />
        <img src={img4} alt="Linguagem 4" className="linguagem-img" />
        <img src={img5} alt="Linguagem 5" className="linguagem-img" />
        <img src={img6} alt="Linguagem 6" className="linguagem-img" />
        <img src={img7} alt="Linguagem 7" className="linguagem-img" />
        <img src={img8} alt="Linguagem 8" className="linguagem-img" />
      </div>
    </section>
  );
}

export default SobreMim;
