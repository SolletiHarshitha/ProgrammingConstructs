var prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter a number : "));
for(let i = 1; i <= number; i++){
    console.log("Power of (2,"+i+") is : "+Math.pow(2,i));
}