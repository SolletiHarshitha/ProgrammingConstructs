var prompt = require("prompt-sync")();
console.log("1.Celsius to Faherenheit\n2.Fahrenheit to Celsius");
let option = parseInt(prompt("Enter an option : "));
switch(option){
    case 1:
        let celsius = prompt("Enter Celsius value : ");
        var result = CelsiusToFahrenheit(celsius);
        if(result >= 32 && result <= 212)
        {
            console.log(celsius + " degree Celsius is equal to " + result + " degree Fahrenheit");
            console.log(result + " degree is between the Freezing and Boiling point");
        }
        else
        console.log(celsius + " degree Celsius is not between the Freezing and Boiling point");
        break;
    case 2:
        let fahrenheit = prompt("Enter Fahrenheit value : ");
        var result = FahrenheitToCelsius(fahrenheit);
        if(result >= 0 && result <= 100)
        {
            console.log(fahrenheit + " degree Fahrenheit is equal to " + result + " degree Celsius");
            console.log(result + " degree is between the Freezing and Boiling point");
        }
        else
        console.log(fahrenheit + " degree Fahrenheit is not between the Freezing and Boiling point");
        break;
    default:
        console.log("Invalid option!");
}
function CelsiusToFahrenheit(celsius){
    return (celsius * 9) / 5 + 32;
}
function FahrenheitToCelsius(fahrenheit){
    return ((fahrenheit - 32) * 5) / 9;
}