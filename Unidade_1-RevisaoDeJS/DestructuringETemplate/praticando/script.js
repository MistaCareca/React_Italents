function desentruturando(){
    function vetor(){
        const arr = ['armando', 'bruno', 'caio'];
        
        const a = arr [0]; 
        const b = arr [1];
        const c = arr [2];
        
        console.log(a,b,c);
        
        const array = ['armando', 'bruno', 'caio'];
        const [x,y,z] = array;
        
        console.log(x,y,z);
    }
    
    function objeto(){
        const obj = {
            nome: 'ze',
            idade: 10
        }
        const{nome, idade} = obj;
        console.log(nome, idade);
    
        // renomear as variaveis
    
        const{nome: primeiroNome, idade: idadeTotal} = obj;
        console.log(primeiroNome, idadeTotal);
    
    
        // desentruturando parametros de uma funçao
        function calculaIdade({anoAtual, anoNascimento}) {
            return anoAtual - anoNascimento;
        }
        const pessoa2 = { anoAtual: 2023, anoNascimento: 2005 }
        console.log(calculaIdade(pessoa2));
    }

    //vetor()
    //objeto()
}

function templateLiterals(){
    let nome = 'ze';
    let saudacao = `ola meu nome é ${nome}`;
    console.log(saudacao);

    let precoUni = 10;
    let qtns = 3;

    console.log(`o total a pagar é ${precoUni * qtns}`);

}
templateLiterals()