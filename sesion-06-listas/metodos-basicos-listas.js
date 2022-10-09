//Como trabajar con listas (arrays, arreglos, vectores)

let array = [1, 2, 3, 4, 5, 6];
let var1 = 45;
let array2 = [1, "hola", false, {id: 5}, null, undefined, var1];

console.log(array2)

//Acceder a los valores de un array a traves de su posicion
//Array[indice] => 0,1,2,3,4,5
console.log(array2[1]);
console.log(array2[4]);

//Metodos para introducir nuevos valores en nuestros arrays
// .push() .unshift() => Mutan el valor de nuestro array 
// Valores al final -> Push
array.push("final", 45, 100, false);
console.log(array);

//Valores al principio -> Unshift
array.unshift("inicio", 87, 99);
console.log(array);

//Metodos para eliminar valores en nuestros arrays
// .pop() .shift() => Mutan el valor del array

const array3 = [1, 3, "hola", false]
//valores al final -> pop
array3.pop();
console.log(array3);

//Valores al principio -> shift
array3.shift()
console.log(array3)

// Metodo para eliminar, modificar o añadir valores en nuestro array
// .splice(x, y, z)
const array4 = [1, 2, 3, 4, 5, 6];

//Eliminar valores .splice(indice, numValoresAEliminar)
array4.splice(2, 3) //segundo parametro cuantos datos va a eliminar
console.log(array4)

//Añadir valores .splice(indice, 0, valores)
array4.splice(2, 0, "Hola", 3);
console.log(array4); 

//Modificar valores 
array4.splice(2, 1, 3)
console.log(array4); 
