//localStorage.setItem("nombre", "Carlos")
//localStorage.setItem("nombre", "Antonio")

//console.log(localStorage.getItem("nombre"))

//localStorage.setItem("persona", JSON.stringify({ nombre: "Carlos", edad: 25}))
//console.log(JSON.parse(localStorage.getItem("persona")))

//JSON.stringify -> Convierte un objeto/array en un string
//JSON.parse -> Convierte un objeto/array convertido a traves de stringify en un objeto de Javascript

localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-sesion", "Carlos");

/* Cookies  */
document.cookie = "nombreCookie=CarlosCookie";

document.cookie = "nombreCaducidad=Nombre; expires =" + new Date(2023, 0, 1).toUTCString()

console.log(document.cookie)