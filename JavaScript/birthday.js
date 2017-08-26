function birthdayCountdown(n) {
  var days = n;
  while (days >= 30) {
    console.log(days + " days until my birthday. Such a long time...")
    days --;
  }
  while (days < 30 && days > 5) {
    console.log(days + " days until my birthday!!!")
    days --;
  }

  while (days <= 5 && days > 0) {
    if (days > 1) {
      console.log("ONLY " + days + " DAYS UNTIL MY BIRTHDAY!!!!!!!!");
      days --;
    }
    else if (days == 1) {
      console.log("ONLY " + days + " DAY UNTIL MY BIRTHDAY!!!!!!!!");
      days --;
    }
  }
  console.log("We're having a party, wheee! ♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░ ME! ♪ღ♪");
}


birthdayCountdown(60);
