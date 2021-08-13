//Read a number and print the week day
var prompt=require('prompt-sync')();
var number=prompt('Enter a number (1-7) : ');
if(number==1)
console.log("SUNDAY");
else if(number==2)
console.log("MONDAY");
else if(number==3)
console.log("TUESDAY");
else if(number==4)
console.log("WEDNESDAY");
else if(number==5)
console.log("THURSDAY");
else if(number==6)
console.log("FRIDAY");
else if(number==7)
console.log("SATURDAY");
else
console.log("Please enater a valid number...");