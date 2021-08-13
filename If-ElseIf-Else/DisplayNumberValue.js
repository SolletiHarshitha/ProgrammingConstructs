//Read a number and print the value
var prompt=require('prompt-sync')();
var number=prompt('Enter a number of form (1,10,100,1000...) : ');
if(number==1)
console.log("UNIT");
else if(number==10)
console.log("TEN");
else if(number==100)
console.log("HUNDRED");
else if(number==1000)
console.log("THOUSAND");
else if(number==10000)
console.log("TEN THOUSAND");
else if(number==100000)
console.log("LAKH");
else if(number==1000000)
console.log("TEN LAKH");
else
console.log("Please enater a valid number...");