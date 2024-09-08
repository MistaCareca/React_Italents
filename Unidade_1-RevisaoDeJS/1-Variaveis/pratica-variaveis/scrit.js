// indroduçao a Var, Let, Const

// VAR
function varVariavel(){
    // var pode ser redeclarado
    var nome = 'brenno'; // declara e atribui um valor (brenno)
    var nome = 'cartaxo'; // redeclara e atribui outro valor (cartaxo)
    
    // criamos uma funçao para exemplificar como funciona o escopo de funçao
    function saudacao() {
        var msg = 'ola';
        return msg;
    }
    //console.log(msg); // aqui a chamada de saudaçao nao sera executada
    
    
    // exemplo de uso em base de bloco
    if(true){
        console.log(`nome = ${nome}`); // cartaxo
        var nome = 'ze'// como var nao tem escopo de bloco ela ira reatribuir o valor anterior que era cartaxo
        console.log(`nome = ${nome}`); // ze
    }
    
    console.log(nome); // prova que fora do escopo de bloco ela fica sobrescrita
    
    console.log(saudacao()); // chamando o ola da funçao
    
    console.log(texto); // chamamos uma variavel antes de declarala porem tera retorno
    var texto = 'teste'; 
    // a variavel texto sera içada /*hoisting*/ que em outras palavras e levada para o topo do 
    // codigo ocorrendo primerio porem sua atribuiçao so ocorre depois
}

// LET
function letVariavel(){
    let telefone = '1231231231231';
    console.log(telefone); // 1231231231231
    // let telefone = '1231231313123'; // nao pode ser redeclarada
    telefone = '10'; // pode ser reatribuida
    console.log(telefone); // 10

    // em bloco o let so pode ser usado dentro desse let
    if(true){
        let telefone2 = '31263126312'; // so pode ser chamdado dentro desse bloco if
        console.log(telefone2); // 31263126312
    }
    // console.log(telefone2); // nao vai ser chamado pois esta fora do bloco if

    // console.log(text); // tentativa de usar o içamento
    // let text = 'um texto' // err (Cannot access 'text' before initialization)
}

// CONST
function constVariavel(){
    const msg = 'ola'; // const declarado como ola
    // const msg = 'ola2'; // const nao pode ser redeclarado
    // msg = 'oi'; // Assignment to constant variable. nao da pra colocar outro valor nele
    console.log(msg);

    // uso de objeto para const
    const contato = {
        nome: 'ze',
        numero: 10
    }

    // nao é permitido redeclarar mesmo que seja um objeto porem
    
    /*
    contato = {
        nome: 'zeze',
        numero: 1010
        }
        */
       
    // pode se atualizar o valor de um objeto

    console.log(contato); // valores antigos

    contato.nome = 'zeze'; // novo nome
    contato.numero = 1010; // novo numero

    console.log(contato); // novos valores

}