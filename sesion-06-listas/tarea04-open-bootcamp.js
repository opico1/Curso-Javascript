let listaCompra = ["Frijoles", "Huevos", "Leche", "Carne", "Pollo"]
console.log(listaCompra);

listaCompra.push("Aceite de Girasol")
console.log(listaCompra);

listaCompra.pop();
console.log(listaCompra);

const peliculasFav = [
    {titulo: "Harry Potter ", director: "J.K. Rowling", fecha: 1997},
    {titulo: "Señor de los anillos", director: "Peter Jackson", fecha:2001},
    {titulo: "Son como niños", director: "Dennis Dugan", fecha: 2011}
]
console.log(peliculasFav);

const post2010 = peliculasFav.filter(obj => obj.fecha > 2010)
console.log(post2010);

const listaDirectores = peliculasFav.map(({director}) => {
    return `${director}`
})
console.log(listaDirectores);

const listaTitulos = peliculasFav.map(({titulo}) => {
    return `${titulo}`
})
console.log(listaTitulos);

const listaPeliculas = listaDirectores.concat(listaTitulos)
console.log(listaPeliculas);

const listaPeliculas2 = [...listaDirectores, ...listaTitulos];
console.log(listaPeliculas2)