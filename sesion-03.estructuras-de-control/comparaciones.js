//Comparaciones 

//Igualdad

if (5 === 5) {
    console.log("5 es igual a 5")
}

let a = 5;
console.log(typeof a)
let b = "5";
console.log(typeof b)

// == Solo compara el valor
// === Compara el valor y el tipo

if (a == b) {
    console.log("A es igual a B - Débil")
}

if (a === b) {
    console.log("A es igual a B - Fuerte")
}

let c = 4;
let d = "4";

if (c != d) {
    console.log("C es diferente a D - Debil");
}

if (c !== d) {
    console.log("C es diferente a D - Fuerte");
}

//Comparaciones mayor que y menor que
let max = 10;
let min = 5;

if (max > min) {
    console.log("Max es mayor que Min");
}

if (max >= 10) {
    console.log("Max es mayor o igual que Min");
}

if (min < max) {
    console.log("Min es mayor que Max");
}
if (min <= max) {
    console.log("Min es mayor o igual que Max");
}