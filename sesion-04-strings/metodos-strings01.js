//Metodos mas utilizados con cadenas de caracteres
//Como obtener la longitud de un string

let str = "Hola soy un string"
console.log(str.length);

//Obtener partes de cadenas de caracteres
//Slice() substring() substr()

let slice_str = str.slice(0, 10);
console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr = str.substr(5, 10)
console.log(substr);

// Reemplazar parte del contenido de una cadena de texto 
let cadena = "Hola mi nombre es Carlos";
console.log(cadena);

let textoLargo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

//Al utilizar strings solo reemplaza la primera instancia
console.log(cadena.replace('Carlos', 'Antonio'));

//Al sustituir la expresion regular /g (global) reemplaza todas las instancias
console.log(textoLargo.replace(/los/g, 'cinco'));

