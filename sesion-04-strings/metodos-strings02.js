//Metodos de cadenas de texto (parte 2)
let input = "Acuario"
let db = "acuario"

// toLowerCase() - toUpperCase()
console.log(input.toLocaleLowerCase());
console.log(input.toUpperCase());
console.log(input.toLocaleLowerCase() === db.toLocaleLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());

//Formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera cadena";
let str_2 = "Y yo soy la segunda cadena";

console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

let str_3 = "Hola soy un string con espacios al final.   ";
console.log(str_3.length);

//trim()
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length)

//Obtener la letra que hay en cierta posicion
let str_4 = "Hola soy el string numero 4";

console.log(str_4.charAt(5))
console.log(str_4[5]);

//Obtener la posicion de una palabra dentro de una cadena
let str_5 = "Hola soy Carlos y me gusta el Basket";
console.log(str_5.indexOf("Carlos"));
console.log(str_5.charAt(9));
