function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

console.log(testGreaterOrEqual(0));
console.log(testGreaterOrEqual(9));
console.log(testGreaterOrEqual(10));
console.log(testGreaterOrEqual(11));
console.log(testGreaterOrEqual(19));
console.log(testGreaterOrEqual(100));
console.log(testGreaterOrEqual(21));



/*

testGreaterOrEqual(0) should return the string Less than 10
Passed:testGreaterOrEqual(9) should return the string Less than 10
Passed:testGreaterOrEqual(10) should return the string 10 or Over
Passed:testGreaterOrEqual(11) should return the string 10 or Over
Passed:testGreaterOrEqual(19) should return the string 10 or Over
Passed:testGreaterOrEqual(100) should return the string 20 or Over
Passed:testGreaterOrEqual(21) should return the string 20 or Over



*/