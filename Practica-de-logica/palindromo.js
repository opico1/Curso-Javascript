let input = 121;

let cadena = input.toString();
let arreglo_temporal = [];

let arreglo = cadena.split('');
//let reverso = arreglo.reverse();

for(let i = arreglo.length - 1; i >= 0; i--){
    arreglo_temporal[i] = arreglo[i];
}

let cadena2 = arreglo_temporal.join('');
console.log(cadena2);
if(cadena == cadena2){
    console.log("true");
}else{
    console.log("false");
}