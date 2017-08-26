


function servantReward() {
  var pennies = 1;
  var reward = 1;

  for (var i = 0; i < 30; i++) {
    pennies = pennies * 2;
    reward = reward + pennies;
  }

  reward = reward / 100;
  reward = console.log("After " + i + " days, the reward would be $" + reward + ".");
  return reward;
}



servantReward();
