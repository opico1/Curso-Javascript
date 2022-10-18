const persona = {
    nombre: "Carlos",
    edad: 25,
    isDeveloper: true,
    saludo: function(){
        console.log('Hola')
    }
}

console.log(persona);

const otra_persona = {
    nombre: "Antonio",
    edad: 30,
    isDeveloper: false,
    saludo: function () {
        console.log('Holaa')
    }
}

console.log(otra_persona);

// Factory Function / Funcion factory
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre,
        edad,
        isDeveloper,
        saludo: function () {
            console.log('Hello')
        }
    }
}

const nueva_persona = creaPersona("Alex", 24, true)
console.log(nueva_persona)