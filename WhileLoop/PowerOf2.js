var prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter a number : "));
let i = 1;
while(i <= number && Math.pow(2,i) <= 256){
    console.log("Power of (2,"+i+") is : "+Math.pow(2,i));
    i++;
}