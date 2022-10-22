const persona = {
    nombre: "Carlos",
    edad: 25
}

console.log(persona);

function obtenDobleEdad(edad){
    return edad * 2;
}

const dobleEdad = obtenDobleEdad(persona.edad)
console.log(dobleEdad)

function obtenArray(edad) {
    let arrayNums = [];

    for(let i=0; i<10; i++){
        const numero = persona.edad + i;
        console.log(numero);
        // Ó arrayNums.push(numero)
        arrayNums = [...arrayNums, numero]
    }
    return arrayNums;
}

const array = obtenArray(persona.edad);

console.log(arrayNums);