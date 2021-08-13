//Validating the day and month
var prompt=require('prompt-sync')();
var day=prompt('Enter a Day : ');
var month=prompt('Enter a Month (1-12) : ');
if((month==3 && day>20) || (month==4 && day<31) || (month==5 && day<=31) || (month==6 && day<20))
console.log("True");
else
console.log("False");