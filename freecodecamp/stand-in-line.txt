function nextInLine(arr, item) {
  // Only change code below this line

  arr.push(item);
  const remove = arr.shift();
  
  return remove;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine([], 5));
console.log(nextInLine([], 1));
console.log(nextInLine([2], 1));
console.log(nextInLine([5,6,7,8,9], 1));
console.log(nextInLine(testArr, 10));
console.log(nextInLine([4]));
console.log("After: " + JSON.stringify(testArr));