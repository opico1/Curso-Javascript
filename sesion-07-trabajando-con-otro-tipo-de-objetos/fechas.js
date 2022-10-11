//Tarea ejercicio 3 OpenBootcamp 

/*
- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

const fecha = new Date()
console.log(fecha)

const nacimiento = new Date("January 30, 1997")
console.log(nacimiento);

const comparacion = (fecha > nacimiento);
console.log(comparacion);

const dia = nacimiento.getDay()
console.log(dia) //Imprime 4 porque domingo es 0 y jueves 4

const mes = nacimiento.getMonth() + 1
console.log(mes)

const año = nacimiento.getFullYear()
console.log(año)
