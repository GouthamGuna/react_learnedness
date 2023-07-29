function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

console.log(testLessOrEqual(10));
console.log(testLessOrEqual(11));
console.log(testLessOrEqual(12));
console.log(testLessOrEqual(23));
console.log(testLessOrEqual(24));
console.log(testLessOrEqual(25));
console.log(testLessOrEqual(55));


/*

testLessOrEqual(0) should return the string Smaller Than or Equal to 12
Waiting:testLessOrEqual(11) should return the string Smaller Than or Equal to 12
Waiting:testLessOrEqual(12) should return the string Smaller Than or Equal to 12
Waiting:testLessOrEqual(23) should return the string Smaller Than or Equal to 24
Waiting:testLessOrEqual(24) should return the string Smaller Than or Equal to 24
Waiting:testLessOrEqual(25) should return the string More Than 24
Waiting:testLessOrEqual(55) should return the string More Than 24
Waiting:You should use the <= operator at least twice


*/