// Sentencias Switch 

let nota = 5;

switch (nota) {
    case 5:
        console.log("Exito, has obtenido un sobresaliente");
        break;
    case 4:
        console.log("Buen trabajo, pero podrias haberlo hecho mejor");
        break;
    case 3:
        console.log("Has obtenido un suficiente");
        break;
    case 2:
        console.log("No has aprobado por poco");
        break;
    case 1:
        console.log("No has estudiado nada, trabaja un poquito mas para la proxima");
        break;
    default:
        console.log("Error");
        break;
}