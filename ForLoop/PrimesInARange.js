var prompt = require("prompt-sync")();
let startNumber = parseInt(prompt("Enter a start number in range : "));
let endNumber = parseInt(prompt("Enter a end number in range : "));
console.log("Prime Numbers between "+startNumber+" and "+endNumber+" are : ");
for(let i = startNumber; i <= endNumber; i++){
    let flag = 0;
    for(let j = 2; j < i; j++)
    {
        if(i % j == 0){
            flag = 1;
            break;
        }
    }
    if(flag == 0 && i > 1)
    console.log(i);
}