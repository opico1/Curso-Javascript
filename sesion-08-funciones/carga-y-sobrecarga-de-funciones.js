// Carga y Sobrecarga de funciones

function saludar() {
    hola()
}

function hola(){
    console.log("Hola, soy la funcion hola()")
}

saludar();

/// 1. global()
/// 2. saludar() global()
/// 3. hola() saludar() global()
/// 4. saludar() global()
/// 5. global()

/*function recursivo() {
    recursivo()
}
// Error al momento de declarar la funcion, hay recursividad
recursivo()
*/