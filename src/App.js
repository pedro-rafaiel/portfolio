import React from 'react';
import SobreMim from './components/SobreMim';
import Projetos from './components/Projetos';
import Inicio from './components/Inicio';
import './App.css';

function App() {
  const projects = [
    {
      title: 'Inserção de Placas em Telhados 2D',
      languages: ['JavaScript', 'HTML', 'CSS'],
      description: 'Descrição: Insere placas em uma imagem retirada do Google Maps ou Earth baseado nas dimensões do telhado e placas, se restrigindo apenas a área que está disponível para colocar. No sistema é necessário colocar as dimensões, tanto da imagem como da placa, a distância horizontal e/ou vertical de uma placa para a outra. É possível também recortar a imagem, rotacionar, colocar a área da imagem, desenhar restrições para não colocar placas em cima, tudo isso manualmente, após isso ser feito ele gera duas imagens com as placas em retrato e paisagem.',
      githubLink: 'https://github.com/GuaraciTech/Solaresp-Code',
    },
    {
      title: 'Gerenciador de Alimentos',
      languages: ['Node.js', 'Express.js', 'MongoDB', 'Moongose'],
      description: 'Descrição: Gerenciador de Alimentos onde cria, lista, busca, atualiza e exclui. Para criação é necessário os seguintes dados: id, nome, categoria, quantidade disponível, data de validade e preço do alimento.',
      githubLink: 'https://github.com/pedro-rafaiel/gerenciador_de_alimentos',
    },
    {
      title: 'Clinicamed',
      languages: ['MySQL'],
      description: 'Descrição: Script SQL completo para a criação e gerenciamento de um sistema de banco de dados para uma clínica médica. O objetivo é gerenciar pacientes, médicos, clínicas, consultas, horários disponíveis e exames de forma eficiente.',
      githubLink: 'https://github.com/pedro-rafaiel/clinicamed',
    },
    {
      title: 'Ordenador',
      languages: ['C'],
      description: 'Descrição: Implementação de operações sobre conjuntos disjuntos e ordenação de subconjuntos utilizando diferentes algoritmos de ordenação. O programa lê dados de um arquivo de entrada e oferece um menu interativo para o usuário realizar diversas operações, como união de conjuntos, busca de representantes e ordenação de subconjuntos.',
      githubLink: 'https://github.com/pedro-rafaiel/ordenar',
    },
    {
      title: 'Agenda Hospital',
      languages: ['C'],
      description: 'Descrição: Simula o agendamento e gerenciamento de consultas médicas. Ele aloca pacientes para consultas com base em prioridades, gerencia faltas com um sistema de substituição de banco de reservas, e gera relatórios detalhados sobre o processo.',
      githubLink: 'https://github.com/pedro-rafaiel/agenda_hospital',
    },
  ];

  return (
    <div className="App">
      <Inicio />
      <SobreMim />
      <Projetos projects={projects} />
    </div>
  );
}

export default App;
