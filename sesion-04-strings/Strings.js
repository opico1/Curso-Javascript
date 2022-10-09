//Sesion 4 - Strings (Cadenas de caracteres)

let str_dbl = "Hola soy un texto con comillas dobles";
let str_sng = 'Hola soy un texto con comillas simples'

console.log(str_dbl);
console.log(str_sng);

let str_comillas = "El otro día me dijo literalmente \"ve a sacar la basura\"";
let str_comillas_simples = 'El otro dia me dijo literalmente "ve a sacar la basura"';

console.log(str_comillas);

/////// Comilllas invertidas (backticks)
let str_backstick = `Hola esto es un string con backticks`;

let nombre = "Carlos";
let saludo = `Hola, ${nombre} bienvenido`;

console.log(saludo);

// Plantilla HTML
let plantilla = `
<html>
    <h1>Pagina web de ${nombre}</h1>
    <p>Este es un parrafo</p>
</html>
`

console.log(plantilla);

