var prompt = require("prompt-sync")();
let start = 1;
let end = 100;
console.log("Choose a number between " + start +" to " + end);
let isFound = false;
while(start != end && (!isFound)){
    let mid = Math.round((start+end)/2);
    console.log("1.Is your number " + mid + "?");
    console.log("2.Is your number less than " + mid + "?");
    console.log("3.Is your number greater than " + mid + "?");
    let option = parseInt(prompt("Enter option : "));
    switch(option){
        case 1:
            console.log("Gussed Number is : " + mid);
            isFound = true;
            break;
        case 2:
            end = mid - 1;
            break;
        case 3:
            start = mid + 1;
            break;
        default:
            console.log("Choose a valid option..");
            break;
    }
    if(start == end)
    console.log("Guessed Number is : " + start);
}