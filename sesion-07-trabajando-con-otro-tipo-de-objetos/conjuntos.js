//Tarea ejercicio 1 OpenBootcamp 
/*
- Un nuevo Set con los nombres de tu familia

- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
*/ 
const familia = ["Maria Arias", "Ulises Martinez", "Carlos Opico"];
console.log(familia);
const setFamilia = new Set(familia);
console.log(setFamilia);

setFamilia.add("Carlos Opico");
console.log(setFamilia);

setFamilia.add("Javascript");
console.log(setFamilia);
