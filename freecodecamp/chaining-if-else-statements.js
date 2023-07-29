function testSize(num) {
  // Only change code below this line

  if(num < 5){
    return "Tiny";
  }else if(num < 10){
    return "Small";
  }else if(num < 15){
    return "Medium";
  }else if(num < 20){
    return "Large";
  }else{
    return "Huge";
  }
  // Only change code above this line
}

console.log(testSize(0));
console.log(testSize(4));
console.log(testSize(5));
console.log(testSize(8));
console.log(testSize(10));
console.log(testSize(14));
console.log(testSize(15));
console.log(testSize(17));
console.log(testSize(20));
console.log(testSize(25));


/*




You should have at least four else statements
Waiting:You should have at least four if statements
Waiting:You should have at least one return statement
Waiting:testSize(0) should return the string Tiny
Waiting:testSize(4) should return the string Tiny
Waiting:testSize(5) should return the string Small
Waiting:testSize(8) should return the string Small
Waiting:testSize(10) should return the string Medium
Waiting:testSize(14) should return the string Medium
Waiting:testSize(15) should return the string Large
Waiting:testSize(17) should return the string Large
Waiting:testSize(20) should return the string Huge
Waiting:testSize(25) should return the string Huge



*/