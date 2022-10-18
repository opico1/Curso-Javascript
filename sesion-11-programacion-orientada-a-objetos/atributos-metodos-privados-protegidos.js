class Persona {
    //nombre;
    //edad;
    
    //Private -> #
    // Private -> Solo se puede acceder dentro de la clase 
    #nombre;
    #edad;
    #obtenEdad;

    // Protected -> _
    // Protected -> Solo se puede acceder desde dentro de la clase y desde clases descendientes 
    _isDeveloper = true;

    constructor(nom,edad){
        this.#nombre = nom;
        this.#edad = edad;
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }

    dimeNombre(){ // Funcion getter -> Nos permite acceder (de forma controlada) a algun atributo protegido
        return this.#nombre;
    }
/*
    #obtenEdad(){
        return this.#edad;
    }*/

    getEdad() {
        return this.#edad;
    }

    setEdad(nuevaedad) {
        this.#edad = nuevaedad;
    }
}

const persona = new Persona("Carlos", 25);
//console.log(persona);
//console.log(persona.nombre)
persona.saludo();
console.log(persona.dimeNombre())
//console.log(persona.#obtenEdad())
//console.log(persona._isDeveloper); //No se puede acceder 

////////////////////////////////////////

// Getter -> metodos que nos permiten obtener atributos/metodos privados o protegidos
const edad = persona.getEdad()
console.log(edad)


// Setter -> metodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos 
// Quiero cambiar la edad de la persona

persona.setEdad(34);
console.log(persona.getEdad())
