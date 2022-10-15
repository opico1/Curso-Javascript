/*
- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos
*/

function siempreTrue() {
    return true
}
console.log(siempreTrue())

////////////////

const info = (valor) => valor = "Hola soy una promesa";

const newPromesa = new Promise((time) => {
    setTimeout(time, 5000)
}) 

newPromesa
    .then(() => console.log("Hola soy una promesa"))

////////////////////////

function* IdPar() {
    let id = 0;
    while (true) {
        id = id + 2;
        if (id === 20) {
            return id;
        }
        yield id;
    }
}

const contadorID = IdPar();

console.log(contadorID.next().value)
console.log(contadorID.next().value)
console.log(contadorID.next().value)
console.log(contadorID.next().value)
console.log(contadorID.next().value)
console.log(contadorID.next().value)