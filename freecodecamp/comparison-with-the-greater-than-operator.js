function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(0));
console.log(testGreaterThan(10));
console.log(testGreaterThan(11));
console.log(testGreaterThan(99));
console.log(testGreaterThan(100));
console.log(testGreaterThan(101));
console.log(testGreaterThan(150));



/*


Passed:testGreaterThan(0) should return the string 10 or Under
Passed:testGreaterThan(10) should return the string 10 or Under
Passed:testGreaterThan(11) should return the string Over 10
Passed:testGreaterThan(99) should return the string Over 10
Passed:testGreaterThan(100) should return the string Over 10
Passed:testGreaterThan(101) should return the string Over 100
Passed:testGreaterThan(150) should return the string Over 100
Passed:You should use the > operator at least twice


*/