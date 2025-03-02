//Criar variável do tipo Strig texto
const user: string = "Marcos";
console.log(`Usuário: ${user}`);

// Criar variável do tipo Número
const idade: number = 44;
console.log(`Idade: ${idade}`);


// Criar variável do tipo boolean
const situation: boolean = true;
console.log(`Situação: ${situation}`);

// Criar variável do tipo array de string
const courses: string[] = ["Curso de React","Curso de Node.js"];
console.log(`Cursos: ${courses}`);

// Criar variável do tipo array de números
const amount: number[]= [5,10,7];
console.log(`Quantidade: ${amount}`);

// Criar variável do tipo "tuple" array com tipos diferentes
var person:[string, number,boolean];
person = ["Marcos",44,true];
console.log(`Usuário: ${person[0]}`);
console.log(`Idade: ${person[1]}`);
console.log(`Situação: ${person[2]}`);


// Criar variável do tipo enum Representa um conjunto de valores nomeados.
enum DayOfTheWeek{
    sunday = 1,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

let dia: DayOfTheWeek;
console.log(`Número que representa Domingo: ${DayOfTheWeek.sunday}`);
console.log(`Número que representa Sexta: ${DayOfTheWeek.Friday}`);

// Criar variável do tipo any, atribuir qualquer tipo de valor para a variável .
let data: any;
data = 10; // atribui um valor doi tipo número
console.log(`Valor atribuido é númerico: ${data}`);
data = "Dia 01/03/2025 dia de aprender váriaveis no node";//atribui um valor do tipo string;
console.log(`Valor atribuido é texto: ${data}`);

// Criar variável do tipo null e undefined.
let variableNull: null = null;
let variableUndefined = undefined;

console.log(`Variavel nula: ${variableNull}`);
console.log(`Variavel Inadefnida: ${variableUndefined}`);

// Criar variável do tipo object

interface Client{
    name: string;
    amount: number;
}

let client: Client ={
    name: "Marcos",
    amount:11
};

console.log(`Nome do Cliente: ${client.name}`);
console.log(`Quantidade de Compras do cliente: ${client.amount}`);


// Criar Variável utilizando union indicando um ou mais tipo

const value: string | boolean = 'Marcos Alexandre';
console.log(`Valor pode ser string ou boolean: ${value}`);
