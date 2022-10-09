let nombre = "Carlos";
let apellido = "Opico";

let estudiante = `El nombre del estudiante es ${nombre} ${apellido}`
console.log(estudiante);

let estudianteMayus = estudiante.toLocaleUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLocaleLowerCase();
console.log(estudianteMinus);

let numLetrasEstudiante = estudiante.trim().length;
console.log(numLetrasEstudiante);

let primerLetraNombre = nombre.charAt();
console.log(primerLetraNombre)

let primerLetraApellido = apellido.charAt(4);
console.log(primerLetraApellido);

let sinEspacios = estudiante.replace(/ /g, '')
console.log(sinEspacios);

let booleanoEstudiante = estudiante.includes(nombre)
console.log(booleanoEstudiante)