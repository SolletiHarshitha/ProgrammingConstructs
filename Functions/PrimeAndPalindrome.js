var prompt = require("prompt-sync")();
let num = prompt("Enter a number : ");
let isPrime = CheckPrime(num);
let isPalindrome = PalindromeValidation(num);
if(isPrime && isPalindrome)
console.log(num + " is both Prime and Palindrome");
else if(isPrime)
console.log(num + " is Prime but not Palindrome");
else if( isPalindrome)
console.log(num + " is Palindrome but not Prime");
else
console.log(num + " is neither Prime nor Palindrome");

function CheckPrime(number){
    let flag = true;
    if(number == 1){
        console.log(" 1 is neither Prime nor Composite");
        return false;
    }
    for(let i = 2; i < number; i++){
        if(number % i == 0){
            flag = false;
            break;
        }
    }
    if(flag){
        console.log(number + " is Prime Number");
        return true;
    }
    else{
        console.log(number + " is not a Prime Number");
        return false;
    } 
}

function PalindromeValidation(num){
    let len = num.length;
    for(let i = 0; i < len / 2; i++){
        if(num[i] != num[len - i - 1]){
            console.log(num + " is not a Palindrome");
            return false;
        }
    }
    console.log(num + " is a Palindrome");
    return true;
 }