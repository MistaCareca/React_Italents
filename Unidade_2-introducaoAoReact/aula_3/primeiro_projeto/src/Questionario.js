import React, { useState } from 'react';
import './Questionario.css';

const Questionario = () => {
  const [respostas, setRespostas] = useState({});
  const [resultado, setResultado] = useState(null);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const perguntas = [
    {
      pergunta: 'Qual a diferença entre uma função tradicional e uma arrow function em JavaScript?',
      opcoes: ['A arrow function não pode ser armazenada em variáveis.', 'A arrow function herda o valor de this do contexto onde foi definida.', ' A arrow function sempre precisa de chaves {} ao redor de seu corpo.', 'São praticamente iguais, sem diferenças reais.'],
      respostaCorreta: 'A arrow function herda o valor de this do contexto onde foi definida.',
    },
    {
      pergunta: ' Qual das opções abaixo NÃO é uma funcionalidade do ES6?',
      opcoes: ['let e const', 'Classes', 'Arrow functions', 'var'],
      respostaCorreta: 'var',
    },
    {
      pergunta: 'let mensagem = (idade >= 18) ? "Maior de idade" : "Menor de idade"; para idade = 20',
      opcoes: ['Maior de idade', 'Menor de idade', 'undefined', 'null'],
      respostaCorreta: 'Maior de idade',
    },
    {
      pergunta: 'O que o operador ternário faz em JavaScript?',
      opcoes: ['Define múltiplas variáveis de uma vez.', 'Substitui uma estrutura if-else simples.', 'Repete um bloco de código até que uma condição seja atendida.', 'Define um valor padrão para uma variável não inicializada.'],
      respostaCorreta: 'Substitui uma estrutura if-else simples.',
    },
    {
      pergunta: 'Qual das opções abaixo cria um objeto corretamente em JavaScript?',
      opcoes: ['let pessoa = new Object("nome", "idade");', 'let pessoa = { nome: "João", idade: 25 };', 'let pessoa = Object.create(nome: "João", idade: 25);', 'let pessoa = (nome: "João", idade: 25);'],
      respostaCorreta: 'let pessoa = { nome: "João", idade: 25 };',
    },
  ];

  const handleChange = (index, valor) => {
    setRespostas({ ...respostas, [index]: valor });
  };

  const handleSubmit = () => {
    const corretas = perguntas.filter(
      (p, i) => p.respostaCorreta === respostas[i]
    ).length;
    setResultado(`Você acertou ${corretas} de ${perguntas.length}`);
    setFinalizado(true);
  };

  const proximaPergunta = () =>{
    if(indiceAtual < perguntas.length - 1){
      setIndiceAtual(indiceAtual + 1);
    }
  };

  const perguntaAnterior = () =>{
    if(indiceAtual > 0){
      setIndiceAtual(indiceAtual - 1);
    }
  };

  return (
    <div>
      {finalizado ? (
        <div className="card">
          <h2>Resultado</h2>
          <p>{resultado}</p>
        </div>
      ) : (
        <div>
          <div className="question-container">
            <h3>{perguntas[indiceAtual].pergunta}</h3>
            {perguntas[indiceAtual].opcoes.map((opcao) => (
              <div className="opcao-container" key={opcao}>
                <input
                  type="radio"
                  name={`pergunta-${indiceAtual}`}
                  value={opcao}
                  checked={respostas[indiceAtual] === opcao}
                  onChange={() => handleChange(indiceAtual, opcao)}
                />
                <label>{opcao}</label>
              </div>
            ))}
            <div>
              <button onClick={perguntaAnterior} disabled={indiceAtual === 0}>Voltar</button>
              <button onClick={indiceAtual === perguntas.length - 1 ? handleSubmit : proximaPergunta}>
                {indiceAtual === perguntas.length - 1 ? 'Enviar Respostas' : 'Próxima'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Questionario;
