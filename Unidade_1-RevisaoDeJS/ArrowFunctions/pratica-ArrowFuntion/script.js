// uso de arrow function

function soma(num1, num2){ // exemplo do caso padrao
    return(num1 + num2)
}

let somaAF = (num1, num2) => { // exemplo de arrow function
    return (num1 + num2)
}

/*
-Retrabalho de Arrow function-

let somaAF = (num1, num2) => num1 + num2

-forma mais simples possivel-

let dobra = num => num * 2;
console.log(dobra(num1));

*/

let fun = (param) => {
    let i = 9;
    console.log(param);
    i++
    if(i == 10){
        console.log("KABUM!");
    }
    return param / 2;
} // em casos onde temos muitas funcionalidades nao podemos simplificalas

//existem casos onde existem arrows vazias

let saudacao = () => { // sem parametros
    console.log('Bom dia');
}


const num1 = 12;
const num2 = 6;

console.log(fun(num2));
console.log(soma(num1, num2));
console.log(somaAF(num2, num2));
