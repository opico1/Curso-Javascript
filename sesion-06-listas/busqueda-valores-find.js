// Iterar los valores de una lista
const array = ["Hola", 2, 5, 90, false, undefined];

//Firna antigua (poco eficiente)
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

// Forma ES6 (mas eficiente) .forEach()
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19];
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor)
})
console.log(suma);

// busqueda de un valor dentro de una lista .find()
// Quiero encontrar el elemento 90 de array
const variable = array.find(valor => {
    if (valor === 90){
        return true;
    }
})
console.log(variable)

const listaObjetos = [
    { nombre: "Carlos", edad: 25},
    { nombre: "Antonio", edad: 34},
    { nombre: "Miguel", edad: 28},
    { nombre: "Lucia", edad: 35},
    { nombre: "Amaida", edad: 29}
]

/*const objeto = listaObjetos.find(o => {
    if(o.nombre === "Lucia"){
        return true
    }
})*/

const objeto = listaObjetos.find(o => o.nombre === "Miguel")
console.log(objeto.edad)

const { edad } = listaObjetos.find(o => o.nombre ==="Miguel")
console.log(objeto.edad)
