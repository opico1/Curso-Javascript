//let n = 19;

function recursividad(n) {
    numero = n.toString();
    let i = 0;
    let suma = 0;
    console.log(numero.length);

    if (n >= 10) {
        while (i < numero.length) {
            let ponencia = numero[i] ** 2;
            suma += ponencia;
            i++;
        }
        if (suma.length > 1) {
            recursividad(suma)
        }else{
            return "True";
        }
    }else{
        return "False";
    }
}

let final = recursividad(19);
console.log(final)