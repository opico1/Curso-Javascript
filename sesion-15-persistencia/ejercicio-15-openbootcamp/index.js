let nombre = "Carlos";
let apellido = "Opico";

const objeto = {
    nombre,
    apellido
}

console.log(objeto)

localStorage.setItem("objetoLocal", JSON.stringify(objeto))

sessionStorage.setItem("objetoSesion", JSON.stringify(objeto))

document.cookie = `CookieObjeto=${JSON.stringify(objeto)}; max-age=120`;