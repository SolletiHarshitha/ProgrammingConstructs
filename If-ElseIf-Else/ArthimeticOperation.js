//Read three numbers and print the minimum and maximum value
var prompt=require('prompt-sync')();
var num1=prompt('Enter first number : ');
var num2=prompt('Enter second number : ');
var num3=prompt('Enter third number : ');
let res1=num1+num2*num3;
let res2=num1%num2+num3;
let res3=num3+num1/num2;
let res4=num1*num2+num3;
console.log("Result 1 value is : "+res1);
console.log("Result 2 value is : "+res2);
console.log("Result 3 value is : "+res3);
console.log("Result 4 value is : "+res4);
let minValue=0;
let maxValue=0;
if(res1 < res2 && res1 < res3 && res1 < res4)
minValue=res1;
else if(res2 < res1 && res2 < res3 && res2 < res4)
minValue=res2;
else if(res3 < res1 && res3 < res2 && res3 < res4)
minValue=res3;
else
minValue=res4;
console.log("Minimum Value is : "+minValue);
if(res1 > res2 && res1 > res3 && res1 > res4)
maxValue=res1;
else if(res2 > res1 && res2 > res3 && res2 > res4)
maxValue=res2;
else if(res3 > res1 && res3 > res2 && res3 > res4)
maxValue=res3;
else
maxValue=res4;
console.log("Maximum Value is : "+maxValue);

