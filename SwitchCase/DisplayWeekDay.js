//Read a number and print the week day
var prompt=require('prompt-sync')();
var number=prompt('Enter a number (1-7) : ');
switch(parseInt(number)){
    case 1:
        console.log("SUNDAY");
        break;
    case 2:
        console.log("MONDAY");
        break;
    case 3:
        console.log("TUESDAY");
        break;
    case 4:
        console.log("WEDNESDAY");
        break;
    case 5:
        console.log("THURSDAY");
        break;
    case 6:
        console.log("FRIDAY");
        break;
    case 7:
        console.log("SATURDAY");
        break;
    default:
        console.log("Please enater a valid number...");
        break;
}