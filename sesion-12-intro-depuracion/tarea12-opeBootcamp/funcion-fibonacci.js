function fibonacci(num) {
    const fib = [0, 1];
    let arrayNums = [0,1];
    for(let i=2; i<num; i++){
        fib[i] = fib[i - 1] + fib[i - 2];

        arrayNums = [...arrayNums, fib[i]]
    }
    return arrayNums;
}

const resultado = fibonacci(6);
console.log(resultado);