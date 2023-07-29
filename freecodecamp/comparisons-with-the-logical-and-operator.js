function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {
      return "Yes";
  }

  // Only change code above this line
  return "No";
}

console.log(testLogicalAnd(10));
console.log(testLogicalAnd(24));
console.log(testLogicalAnd(25));
console.log(testLogicalAnd(30));
console.log(testLogicalAnd(50));
console.log(testLogicalAnd(51));
console.log(testLogicalAnd(75));
console.log(testLogicalAnd(80));



/*

You should use the && operator once
Passed:You should only have one if statement
Passed:testLogicalAnd(0) should return the string No
Passed:testLogicalAnd(24) should return the string No
Passed:testLogicalAnd(25) should return the string Yes
Passed:testLogicalAnd(30) should return the string Yes
Passed:testLogicalAnd(50) should return the string Yes
Passed:testLogicalAnd(51) should return the string No
Passed:testLogicalAnd(75) should return the string No
Passed:testLogicalAnd(80) should return the string No



*/