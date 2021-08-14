let headCount = 0;
let tailCount = 0;
while(headCount < 11 || tailCount < 11){
    let coinValue=Math.floor(Math.random()*10)%2;
    if(coinValue)
    headCount++;
    else
    tailCount++;
}
if(headCount==11)
console.log("Head Wins");
else
console.log("Tail Wins");