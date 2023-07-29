function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

console.log(testElse(4));
console.log(testElse(5));
console.log(testElse(6));
console.log(testElse(10));


/*


You should only have one if statement in the editor
Waiting:You should use an else statement
Waiting:testElse(4) should return the string 5 or Smaller
Waiting:testElse(5) should return the string 5 or Smaller
Waiting:testElse(6) should return the string Bigger than 5
Waiting:testElse(10) should return the string Bigger than 5



*/