import { helloWorld } from './module.js';
import padrao from './module.js'; 
import padrao2 from './module2.js';
// ao chamar uma funçao anonima nao a necessidade de 
//{} ja que eles servem para expecificar a funçao
import * as variaveis from './module3.js'; // isso serve para importar tudo de um arquivo
// o * e as sao similares ao SQL 'as' define um apelido o '*' significa ALL 

padrao2();
padrao();
helloWorld();
console.log(variaveis.name);
console.log(variaveis.age);
console.log(variaveis.country);