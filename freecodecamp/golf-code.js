const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line

  if(strokes == 1){
    return names[0];
  }else if(strokes <= par - 2){
    return names[1];
  }else if(strokes === par - 1){
    return names[2];
  }else if(strokes === par){
    return names[3];
  }else if(strokes === par + 1){
    return names[4];
  }else if(strokes === par + 2){
    return names[5];
  }else {
    return names[6];
  }
  // Only change code above this line
}

console.log(golfScore(4, 1));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(4, 3));
console.log(golfScore(4, 4));
console.log(golfScore(1, 1));
console.log(golfScore(5, 5));
console.log(golfScore(4, 5));
console.log(golfScore(4, 6));
console.log(golfScore(4, 7));
console.log(golfScore(5, 9));


/*

golfScore(4, 1) should return the string Hole-in-one!
Passed:golfScore(4, 2) should return the string Eagle
Passed:golfScore(5, 2) should return the string Eagle
Passed:golfScore(4, 3) should return the string Birdie
Passed:golfScore(4, 4) should return the string Par
Passed:golfScore(1, 1) should return the string Hole-in-one!
Passed:golfScore(5, 5) should return the string Par
Failed:golfScore(4, 5) should return the string Bogey
Passed:golfScore(4, 6) should return the string Double Bogey
Passed:golfScore(4, 7) should return the string Go Home!
Passed:golfScore(5, 9) should return the string Go Home!



*/


