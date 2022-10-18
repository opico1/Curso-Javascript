class Persona {
    nombre;
    edad;
    isDeveloper;

    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
}

const nueva_persona = new Persona("Carlos", 25, true);
console.log(nueva_persona);
nueva_persona.saludo();

let numero = 60 // Inicializando
console.log(typeof numero)

let persona2 = new Persona("Paola", 25, false); // Instanciar
console.log(typeof persona2)
console.log(persona2 instanceof Persona)

// instanceof -> Similar a typeof pero para clases 