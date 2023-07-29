function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20 || val < 10) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

console.log(testLogicalOr(0));
console.log(testLogicalOr(9));
console.log(testLogicalOr(10));
console.log(testLogicalOr(15));
console.log(testLogicalOr(19));
console.log(testLogicalOr(20));
console.log(testLogicalOr(21));
console.log(testLogicalOr(25));



/*


You should use the || operator once
Waiting:You should only have one if statement
Waiting:testLogicalOr(0) should return the string Outside
Waiting:testLogicalOr(9) should return the string Outside
Waiting:testLogicalOr(10) should return the string Inside
Waiting:testLogicalOr(15) should return the string Inside
Waiting:testLogicalOr(19) should return the string Inside
Waiting:testLogicalOr(20) should return the string Inside
Waiting:testLogicalOr(21) should return the string Outside
Waiting:testLogicalOr(25) should return the string Outside


*/