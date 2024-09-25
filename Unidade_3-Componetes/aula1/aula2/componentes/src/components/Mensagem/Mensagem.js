function Mensagem(props){
  const {nome, sobrenome} = props; // desestruturaçao
    return(
      <p>Esta funcionando, {nome} {sobrenome}</p>
  );
}

export default Mensagem;