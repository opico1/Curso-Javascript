const btnBoton = document.getElementById("btnBoton");

btnBoton.addEventListener("click", () => {
    alert("click en el boton")
})

$(document).ready(() => {
    $("#btnBoton").click(() => {
        console.log("Hola, estoy utilizando jQuery")
    })
})