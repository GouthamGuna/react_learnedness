function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(orderMyLogic(4));
console.log(orderMyLogic(6));
console.log(orderMyLogic(11));


/*

orderMyLogic(4) should return the string Less than 5
Waiting:orderMyLogic(6) should return the string Less than 10
Waiting:orderMyLogic(11) should return the string Greater than or equal to 10


*/