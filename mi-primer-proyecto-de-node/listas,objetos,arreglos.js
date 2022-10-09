//Listas, array o arreglo
const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(2, "hola", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "Soy el primer elemento, index 0"

const lista4 = [lista, lista2, lista3];

console.log(lista)
console.log(lista2)
console.log(lista3);
console.log(lista4)

//Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Carlos", "Fabricio", "Luis"],
    tarjeta: {
        marca: "Movistar",
        almacenamiento: 128
    }
}

movil.año = 2020;
movil.marca = "Samsung";
console.log(movil.marca)

//Fechas
//Librerias de apoyo Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const año = ahora.getFullYear();

console.log(dia, mes, año)