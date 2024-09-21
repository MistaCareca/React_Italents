import logo from './logo.svg';
import './App.css';

function App() {

  // uma funcao que conta o numero de Ns do meu nome
  function contarNumeroDeNs(string, letra){ 
    return string.split(letra).length - 1;
  }

  const Saudacao = () => "Olá, como vai?";

  const nome = 'Brenno';
  const letras = contarNumeroDeNs(nome, 'n'); // passagem dos parametros para a funcao
  const idade = 19;
  const resposta = idade >= 18 ? "Posso votar" : "Não posso votar"; // uso do ternario 

  const pessoas= [
  {
    nome: "Brenno",
    profissao: "Estudante"
  },
  {
    nome: "Jacó",
    profissao: "CLT"
  },
  {
    nome: "Marques",
    profissao: "Estudante"
  },  
  {
    nome: "Lucas",
    profissao: "Estagiario"
  }
]

  return (
    <div>
      <h1 className='titulo'>{Saudacao()}</h1>
      <h2>meu nome é {nome} tenho {idade} anos e {resposta}!</h2>
      <p>e meu nome tem {letras} Ns</p>
      <ul>
        {pessoas.map( pessoas => (
        <li>{pessoas.nome} - {pessoas.profissao}</li>
            )
          )
        }
      </ul>
    </div>
  );
}

export default App;
