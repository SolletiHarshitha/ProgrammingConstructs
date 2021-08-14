let amount = 100;
let countOfWins = 0;
let countOfBets = 0;
while(amount > 0 && amount < 200){
    let game = Math.floor(Math.random() * 10) % 2;
    if(game == 1)
    {
        amount++;
        countOfWins++;
    }
    else{
        amount--;
    }
    countOfBets++;
}
console.log("Number of times Won : "+countOfWins);
console.log("Number of Bets made : "+countOfBets);
if(amount == 200)
console.log("Gambler Win");
else
console.log("Gambler Lose");