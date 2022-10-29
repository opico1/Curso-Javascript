const boton = document.querySelector("#btn");

console.log(boton)

boton.addEventListener("click", () => {
    //alert("Se ha hecho click")
    //confirm("Estas de acuerdo?") && console.log("OK")
    //confirm("Estas de acuerdo?") 
    //? console.log("OK") 
    //: console.log("NO!!")

    const respuesta = confirm("Seguro?")
    if (respuesta == true) {
        console.log("Estas de acuerdo")
    }else{
        console.log("No estas de acuerdo")
    }
})

const botonInfo = document.querySelector("#info");
botonInfo.addEventListener("click", () => {
    const nombre = prompt("Cual es tu nombre?");
    if (nombre) {
        console.log("Tu nombre es: " + nombre)
    }else{
        console.log("No has introducido nada")
    }
    
})

const lista = [{
    nombre: "Carlos",
    edad: 25
}, {
    nombre: "Luis",
    edad: 32
}, {
    nombre: "Pedro",
    edad: 40
}]

console.log(lista)
console.table(lista)
