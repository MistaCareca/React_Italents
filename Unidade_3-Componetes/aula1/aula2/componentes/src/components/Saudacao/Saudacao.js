import './Saudacao.css';

function Saudacao({nome = 'User', sobrenome = ''}){ //funciona como passagem de parametros normal de toda leng  
    return (
      <h2 className = "title">Opa!, {nome} {sobrenome}</h2>
  );
}

export default Saudacao;