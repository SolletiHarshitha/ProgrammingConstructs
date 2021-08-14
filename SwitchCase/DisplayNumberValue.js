//Read a number and print the value
var prompt=require('prompt-sync')();
var number=prompt('Enter a number of form (1,10,100,1000...) : ');
switch(parseInt(number)){
    case 1:
        console.log("UNIT");
        break;
    case 10:
        console.log("TEN");
        break;
    case 100:
        console.log("HUNDRED");
        break;
    case 1000:
        console.log("THOUSAND");
        break;
    case 10000:
        console.log("TEN THOUSAND");
        break;
    case 100000:
        console.log("LAKH");
        break;
    case 1000000:
        console.log("TEN LAKH");
        break;
    default:
        console.log("Please enater a valid number...");
        break;
}