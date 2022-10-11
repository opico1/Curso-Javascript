//Tarea ejercicio 2 OpenBootcamp 

/*
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/
const obj = {
    nombre: "Carlos",
    apellido: "Opico",
    edad: 25,
    altura: "1.75m",
    eresDesarrollador: true
}
console.log(obj)

let edad = "edad";
console.log(obj.edad)

const datos = [
    { nombre: "Carlos", apellido: "Opico", edad: 25, altura: "1.75m", eresDesarrollador: true},
    { nombre: "David", apellido: "Zamora", edad: 23, altura: "1.65m", eresDesarrollador: false},
    { nombre: "Luis", apellido: "Abrego", edad: 32, altura: "1.80m", eresDesarrollador: true}
]

console.log(datos)
datos.sort((a, b) => b.edad - a.edad)
console.log(datos)