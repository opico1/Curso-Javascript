class Estudiante {
    nombre;
    asignatura = ["Javascript", "HTML", "CSS"];

    constructor(nombre){
        this.nombre = nombre;
    }

    obtenDatos(){
        return {
            nom: this.nombre,
            asig: this.asignatura
        }
    }
}

let estudiante_1 = new Estudiante("Carlos")
estudiante_1.obtenDatos();

console.log(estudiante_1)