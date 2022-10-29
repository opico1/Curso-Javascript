let n = 15; 
let palabra = ""
for(let i = 1; i <= n; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        palabra = "FizzBuzz";
    } else if (i % 3 == 0 ) {
        palabra = "Fizz";
    } else if (i % 5 == 0) {
        palabra = "Buzz";
    } else{
        palabra = i;
    }

    console.log(palabra);
}

