"use strict";
var user = "Marcos";
console.log("Usu\u00E1rio: ".concat(user));
var idade = 44;
console.log("Idade: ".concat(idade));
var situation = true;
console.log("Situa\u00E7\u00E3o: ".concat(situation));
var courses = ["Curso de React", "Curso de Node.js"];
console.log("Cursos: ".concat(courses));
var amount = [5, 10, 7];
console.log("Quantidade: ".concat(amount));
var person;
person = ["Marcos", 44, true];
console.log("Usu\u00E1rio: ".concat(person[0]));
console.log("Idade: ".concat(person[1]));
console.log("Situa\u00E7\u00E3o: ".concat(person[2]));
var DayOfTheWeek;
(function (DayOfTheWeek) {
    DayOfTheWeek[DayOfTheWeek["sunday"] = 1] = "sunday";
    DayOfTheWeek[DayOfTheWeek["Monday"] = 2] = "Monday";
    DayOfTheWeek[DayOfTheWeek["Tuesday"] = 3] = "Tuesday";
    DayOfTheWeek[DayOfTheWeek["Wednesday"] = 4] = "Wednesday";
    DayOfTheWeek[DayOfTheWeek["Thursday"] = 5] = "Thursday";
    DayOfTheWeek[DayOfTheWeek["Friday"] = 6] = "Friday";
    DayOfTheWeek[DayOfTheWeek["Saturday"] = 7] = "Saturday";
})(DayOfTheWeek || (DayOfTheWeek = {}));
var dia;
console.log("N\u00FAmero que representa Domingo: ".concat(DayOfTheWeek.sunday));
console.log("N\u00FAmero que representa Sexta: ".concat(DayOfTheWeek.Friday));
var data;
data = 10;
console.log("Valor atribuido \u00E9 n\u00FAmerico: ".concat(data));
data = "Dia 01/03/2025 dia de aprender váriaveis no node";
console.log("Valor atribuido \u00E9 texto: ".concat(data));
var variableNull = null;
var variableUndefined = undefined;
console.log("Variavel nula: ".concat(variableNull));
console.log("Variavel Inadefnida: ".concat(variableUndefined));
var client = {
    name: "Marcos",
    amount: 11
};
console.log("Nome do Cliente: ".concat(client.name));
console.log("Quantidade de Compras do cliente: ".concat(client.amount));
var value = 'Marcos Alexandre';
console.log("Valor pode ser string ou boolean: ".concat(value));
