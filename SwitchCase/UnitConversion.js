var prompt=require('prompt-sync')();
console.log("1.Feet to Inch\n2.Feet to Meter\n3.Inch to Feet\n4.Meter to Feet");
let option=prompt("Enter the option : ");
switch(parseInt(option)){
    case 1:
        let feetToInch=prompt("Enter feet value : ");
        console.log("Feet to Inch : "+feetToInch*12);
        break;
    case 2:
        let feetToMeter=prompt("Enter feet value : ");
        console.log("Feet to Meter : "+feetToMeter*0.3048);
        break;
    case 3:
        let inchToFeet=prompt("Enter inch value : ");
        console.log("Inch to Feet: "+inchToFeet/12);
        break;
    case 4:
        let meterToFeet=prompt("Enter meter value : ");
        console.log("Meter to : "+meterToFeet*3.28084);
        break;
    default:
        console.log("Please enter a valid option...")
        break;
}