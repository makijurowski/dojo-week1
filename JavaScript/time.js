
function tellingTime(HOUR, MINUTE, PERIOD) {
  var STARTPHRASE = "";
  var ENDPHRASE = "";
  var PHRASE = "";

  if (HOUR == 12 && MINUTE == 0 && PERIOD == "AM") {
    PHRASE = "It's midnight.";
    return PHRASE;
  }

  else if (HOUR == 12 && MINUTE == 0 && PERIOD == "PM") {
    PHRASE = "It's noon.";
    return PHRASE;
  }

  else {
    if (MINUTE == 5) {
      STARTPHRASE = "5 after";
    }

    else if (MINUTE == 15) {
      STARTPHRASE = "a quarter after";
    }

    else if (MINUTE == 30) {
      STARTPHRASE = "half past";
    }

    else if (MINUTE == 45) {
      HOUR += 1;
      STARTPHRASE = "a quarter until";
    }

    else if (MINUTE == 55) {
      HOUR += 1;
      STARTPHRASE = "5 until";
    }

    else if (MINUTE > 30) {
      HOUR += 1;
      STARTPHRASE = "almost";
    }

    else if (MINUTE < 30) {
      STARTPHRASE = "just after"
    }

    if (PERIOD == "AM") {
      ENDPHRASE = "in the morning.";
    }

    else if (PERIOD == "PM") {
      ENDPHRASE = "in the evening.";
    }
  PHRASE = "It's " + STARTPHRASE + " " + HOUR + " " + ENDPHRASE;
  return PHRASE;
  }

}

console.log(tellingTime(8, 5, "PM"));
