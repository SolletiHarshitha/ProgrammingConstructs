//Finding Minimum and Maximum Value among 5 Random numbers
let minValue=1000;
let maxValue=100;
for(var i=1;i<=5;i++){
    var randomValue=Math.floor(Math.random()*1000);
    console.log("Random Value "+i+" is : "+randomValue);
    if(randomValue<minValue)
    minValue=randomValue;
    else if(randomValue>maxValue)
    maxValue=randomValue;
}
console.log("Minimum value : "+ minValue);
console.log("Maximum value : "+ maxValue);