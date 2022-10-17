const nuevaFuncion = mensaje => {
    return mensaje
}

try {
    console.log("Esta ejecutandose de manera correcta");
    const funcion = nuevaFuncion("Este es un mensaje de error personalizado")
    console.log(funcion)
} catch (error) {
    console.error(`El mensaje de error es ${error}`);
    console.log(error)
}