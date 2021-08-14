var prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter a number : "));
let sum = 0;
for(let i = 1; i <= number; i++){
    sum += (1/i);
}
console.log("Harmonic Number : "+sum);