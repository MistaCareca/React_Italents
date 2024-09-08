function ternarioNoWhile(){
    let idade = 16;
    
    while( idade <= 18 ){
    const pode = idade >= 18 ? 'sim, ja pode' : 'nao, ainda nao';
    console.log(`Eu ja posso dirigir com ${idade}? ${pode}`);
    idade++;
    }
    }

function atribuirComTernario(){
    const num = 10;
    const par = 10 % 2 === 0 ? 'é' : 'é nao';
    console.log(`o valor é par? ${par}`);
}

function ternarioNoConsole(){
    const duasLinhas = true;
    console.log(`Me falaram que esse codigo tem apenas duas linhas ${duasLinhas === true ? true : false}`);
}

ternarioNoWhile();
atribuirComTernario();
ternarioNoConsole();