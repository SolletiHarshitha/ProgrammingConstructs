//Find the year is a Leap or not
var prompt=require('prompt-sync')();
var year=prompt('Enter a year : ');
if((year%4==0) && (year%100!=0) || (year%400==0))
console.log(year+" is a leap year");
else
console.log(year+" is not a leap year");