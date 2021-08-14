var prompt = require("prompt-sync")();
let num = prompt("Enter a number : ");
PalindromeValidation(num);

function PalindromeValidation(num){
   let len = num.length;
   let flag = true;
   for(let i = 0; i < len / 2; i++){
       if(num[i] != num[len - i - 1]){
           console.log(num + " is not a Palindrome");
           flag = false;
       }
   }
   if(flag == true)
   console.log(num + " is a Palindrome");
}
