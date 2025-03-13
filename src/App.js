import React, { useEffect } from 'react';
import SobreMim from './components/SobreMim';
import Projetos from './components/Projetos';
import Inicio from './components/Inicio';
import FloatingSquares from "./components/FloatingSquares";
import './App.css';

function App() {
  const projects = [
    {
      title: 'Inserção de Placas em Telhados 2D',
      languages: ['JavaScript', 'HTML', 'CSS'],
      description: 'Descrição: O sistema permite inserir placas em uma imagem do Google Maps ou Earth, ajustando as dimensões do telhado e das placas. É possível definir a distância entre as placas, recortar a imagem, rotacioná-la, e desenhar restrições para evitar sobreposição de placas. Após as configurações, o sistema gera duas imagens com as placas dispostas em formato retrato e paisagem.',
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
    {
      title: 'Frutaria API',
      languages: ['React, Node.js, MySQL'],
      description: 'Descrição: Este projeto foi criado para facilitar o gerenciamento de produtos de uma frutaria, utilizando Node.js, Express e MySQL no backend, e React no frontend. Nele é possível adicionar, editar(nome, preço e disponível em estoque) e excluir o produto, com área da empresa e clientes. Na área do cliente não é possível fazer alterações no projeto, apenas editar o que for colocado no carrinho, selecionando a forma de pagamento pode ter taxa de pagamento ou desconto, ao finalizar a compra no carrinho, vai ser mandada uma mensagem para o número que está no código com todos os detalhes da compra (futuramente será colocado na área da empresa para alterar o número quando desejar).',
      githubLink: 'https://github.com/pedro-rafaiel/frutaria/tree/master',
    },
    {
      title: 'RPG (Em andamento)',
      languages: ['C#'],
      description: 'Descrição: Joguinho simples de uma luta apenas por enquanto, de um herói contra um goblin, onde você é o herói e pode se defender ou atacar, baseado nos dados de 1 a 10 vai decidir o seu dano e o do inimigo.',
      githubLink: 'https://github.com/pedro-rafaiel/RPG',
    },
  ];

  useEffect(() => {
    const createSparkle = (e) => {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      document.body.appendChild(sparkle);

      sparkle.style.left = `${e.clientX}px`;
      sparkle.style.top = `${e.clientY}px`;

      setTimeout(() => {
        sparkle.remove();
      }, 1000);
    };

    window.addEventListener('mousemove', createSparkle);

    return () => {
      window.removeEventListener('mousemove', createSparkle);
    };
  }, []);

  return (
    <div className="App">
      <FloatingSquares />
      <Inicio />
      <SobreMim />
      <Projetos projects={projects} />
    </div>
  );
}

export default App;
