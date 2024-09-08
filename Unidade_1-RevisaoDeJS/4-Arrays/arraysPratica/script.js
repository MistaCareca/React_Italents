let numeros = [1, 2, 3, 4, 5];
let nomes = ['a', 'b', 'c', 'd', 'e'];

let matriz = [ 
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(numeros);
console.log(nomes);
console.log(matriz);

/*
como me localizar em um array
 0  1  2  3   <- indice
[1, 2, 3, 4];

indice é o meio de se localizar em um array
*/

console.log(numeros[1]); // 2
console.log(nomes[0]); // a

// podemos tbm modificar os valores do array usando os indices

numeros[0] /*1*/ = 10; 
console.log(numeros);

// dentro de matrizes

/*
                0  1  2 
   indiceP - 0 [1, 2, 3],
   indiceP - 1 [4, 5, 6],
   indiceP - 2 [7, 8, 9]

   chamada: matriz[0][0] = 1
*/

// usando metodos

let teste = [1]; // array vazio para testes

teste.push(10); // adiciona o 10 no final
console.log(teste);
teste.pop(); // remove o 10 que estava no final
console.log(teste); 
teste.unshift(10) // adiciona o 10 no inicio do array
console.log(teste);
teste.shift(); // remove o primeiro item do array
console.log(teste);