//takes number of dice from command line
//rolls that many dice (random num 1-6)

//use process arg
//use for loop to go through array





var numberOfDice = process.argv[2];
var diceArray = [];
var diceNumbers;
var stringWithSpace= "";

for (var i = 0; i < numberOfDice; i++){
  diceNumbers = Math.floor(Math.random() * 6) + 1;
  stringWithSpace = " " + diceNumbers.toString();
  diceArray[i] = stringWithSpace;
}

console.log("Rolled" + " " + numberOfDice + " " + "dice:" + diceArray)





