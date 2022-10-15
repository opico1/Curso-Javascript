//  Que son las funciones, como se declaran y como se utilizan 
const nom = "Antonio"
saludar(nom);

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

///////////////

let nombre_2 = "Luis";
console.log(nombre_2)

despedir(nombre_2);

function despedir(nombre) {
    nombre = "Juan"
    console.log(`Adios ${nombre}`)
}

///////////////////

let persona = {
    nombre: "Juan",
    apellido: "Lopez"
}

saludarPersona(persona);

console.log(persona);

function saludarPersona(objeto) {
    objeto.apellido = "Martinez"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

///////////////

function imprimeNumero(numero = 7) {
    console.log(numero)
}

imprimeNumero();

////////////////

function imprimir(...parametros) {
    console.log(parametros)
}

imprimir(1, 9, 3, 2, "Hola", {id: 9});

/////////////////

function suma(...nums){
    //console.log(...nums);
    return nums.reduce((a, b) => a + b)
}

const s = suma(1, 2, 3, 4, 9, 15)

console.log(s)

////////////////

function multiplicar(a = 0, b = 0) {
    return a * b;
}

console.log(multiplicar(5, 6));