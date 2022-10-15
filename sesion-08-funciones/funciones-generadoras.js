function* generaId() {
    let id = 0;
    while(true){
        id++;
        if (id === 10) {
            return id
        }
        yield id;
    }
}

const get = generaId();

console.log(get.next())
console.log(get.next())
console.log(get.next())
console.log(get.next())
console.log(get.next().value)
console.log(get.next().value)
console.log(get.next().value)
console.log(get.next().value)
console.log(get.next().value)
console.log(get.next().value)
console.log(get.next())