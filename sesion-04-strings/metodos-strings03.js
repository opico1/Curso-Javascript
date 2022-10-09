//Metodos de cadenas de texto (parte 3)
// https://regexr.com

let textoLargo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

console.log(textoLargo.match(/no/g));

//Existe la palabra dentro del texto
console.log(textoLargo.includes("prefiere"))

//Saber si un texto empieza con una palabra
console.log(textoLargo.startsWith("Tito no es un mono"));

//Saber si un texto termina con una palabra
console.log(textoLargo.endsWith("árboles."))