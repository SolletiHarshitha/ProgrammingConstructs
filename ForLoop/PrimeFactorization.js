var prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter a number : "));
while (number % 2 == 0)
{
    console.log(2 + " ");
    number /= 2;
}
for (let i = 3; i <= Math.sqrt(number); i += 2)
{
    while (number % i == 0)
    {
        console.log(i + " ");
        number /= i;
    }
}

if (number > 2)
console.log(number);