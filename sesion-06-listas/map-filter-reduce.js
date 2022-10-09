// Trabajar con metodos mas avanzados 
// .map() .filter() . reduce()

const array = ["San Salvador", "Ciudad Delgado", "Apopa", "Soyapango", "Santa Tecla"];

const val = array.forEach(e => {
    console.log(e)
    return 4
})
console.log(val)

const newArray = array.map((valor, indice) => {
    return `${indice + 1} - ${valor}`
})

console.log(newArray);

const listaObjetos = [
    { nombre: "Carlos", edad: 25},
    { nombre: "Antonio", edad: 34},
    { nombre: "Miguel", edad: 28},
    { nombre: "Lucia", edad: 35},
    { nombre: "Amaida", edad: 29}
]

/*const personasMayores = listaObjetos.filter(obj => {
    if (obj.edad > 30) {
        return true
    } else {
        return false
    }
})*/

const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores);

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel")
console.log(nuevaLista);


const valores = [3, 56, 23, 5, 90, 100]

const suma = valores.reduce((acumulado, current, indice, arrayOriginal) => {
    console.log(acumulado)
    console.log(current)
    console.log(indice)
    console.log(arrayOriginal)
    return acumulado + current
})
console.log(suma)