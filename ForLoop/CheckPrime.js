var prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter a number : "));
let isPrime = true;
if(number == 1){
    console.log(" 1 is neither prime nor composite");
    return;
}
for(let i = 2; i < number; i++){
    if(number % i == 0){
        isPrime = false;
        break;
    }
}
if(isPrime)
console.log(number+" is Prime Number");
else
console.log(number+" is not a Prime Number");
