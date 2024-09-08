function RecebendoSpread(){
    const objeto = { nome: 'brenno', idade: 19 };
    
    const novoObjeto = { ...objeto };
    
    console.log(`esses dados estao vindo da variavel novoObjeto:`);
    console.log(novoObjeto);
    //para usar o template String com objetos sempre saira erro ja que ele retorna um JSON
}

function AddSpread(){
    const objeto1 = { nome: 'doido', idade: 73 };
    const objeto2 = { cidade: 'santos', pais:'Brasil' };
    const resultado = { ...objeto1, ...objeto2 } //junçao de dois objetos
    console.log(resultado);
    
    const outroObjeto = {bairro: 'praça', ...objeto2}; // adiçao por meio do spread de um objeto a uma outra propriedade
    console.log(outroObjeto);
}

function SpreadArray(){
    const array1 = [1,2,3];
    const array2 = [4,5,6];
    const novoArray = [...array1, ...array2];
    console.log(novoArray);
}