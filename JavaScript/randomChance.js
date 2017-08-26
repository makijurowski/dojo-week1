
function slots(quarters) {
  var winnings = 0;
  while (quarters > 0) {
    var randomChance = Math.floor(Math.random() * 100);
    console.log("My random number is: " + randomChance);
    if (quarters == 0) {
      return 0;
    }

    else if (randomChance == 50) {
      quarters--;
      winnings = Math.floor((Math.random() * (101 - 50) + 50)) + quarters;
      console.log("Congratulations, you won! You now have " + winnings + " quarters.");
    }

    else {
      quarters --;
      console.log("Sorry, you lost. You now only have " + quarters + " quarters remaining.");
    }
  }
}

slots(100);
