function printNumRange(start, end, skip) {

  for (var i = start; i < end;) {
    console.log(i);
    i = i + skip;
  }

}

printNumRange(2, 10, 2);
