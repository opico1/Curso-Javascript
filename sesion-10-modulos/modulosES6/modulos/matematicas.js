export function suma(a, b) {
    return a + b;
}

export function multiplica(a, b) {
    return a * b;
}

export function eleva(a, b) {
    return a ** b;
}

export function factorial(a) {
    // Factorial de 5: 5*4*3*2*1
    let factorial = 1;
    for(let i = 1; i <= a; i++){
        factorial = factorial * i;
    }
    return factorial;
}

export const nombre = "Matematicas";

/* Se sustituye por el type en json
module.exports = {
    suma,
    multiplica,
    eleva,
    factorial
}
*/