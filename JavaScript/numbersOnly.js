
function onlyNumbers(arr) {
  newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(onlyNumbers([1, "apple", -3, "orange", 0.5]));
