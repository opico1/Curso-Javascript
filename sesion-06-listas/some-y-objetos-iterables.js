// .some()

const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2];

const res = array.some(valor => valor < -0)
console.log(res)

const existe = array.some(valor => valor === 90)
console.log(existe)

const listaObjetos = [
    { nombre: "Carlos", edad: 25},
    { nombre: "Antonio", edad: 34},
    { nombre: "Miguel", edad: 28},
    { nombre: "Lucia", edad: 35},
    { nombre: "Amaida", edad: 29}
]

const existeMiguel = listaObjetos.some(persona => persona.nombre === "Miguel")
console.log(existeMiguel);

//Como obtener una lista a partir de un objeto iterable
const str = "Hola soy Carlos"
console.log(str[5]);

const ar_str = Array.from(str)
console.log(ar_str);

const set = new Set([2, 3, "Hola", 4])
const ar_set = Array.from(set);
console.log(ar_set)

const keys = array.keys()
console.log(keys);

const ar_keys = Array.from(keys);
console.log(ar_keys)