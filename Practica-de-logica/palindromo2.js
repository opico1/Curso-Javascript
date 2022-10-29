let n = 0
function palindrome(n){
    return n == n.toString().split('').reverse().join('');
}
console.log(palindrome(778))

