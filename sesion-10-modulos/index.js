// Formas de importar/exportar modulos
// 1. CommonJS - require
// 2. ES6 - import

const moduloMatematicas = require("./modulos/matematicas.js");
//const factorial = moduloMatematicas.factorial;
//const { factorial, suma } = moduloMatematicas;
//console.log(moduloMatematicas)

const { factorial, suma } = require("./modulos/matematicas.js")

const fact = factorial(10)
console.log(fact);

const sum = moduloMatematicas.suma(12, 90);
console.log(sum);