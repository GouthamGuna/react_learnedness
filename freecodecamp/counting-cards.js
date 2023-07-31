let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');


/*

Your function should return a value for count and the text (Bet or Hold) with one space character between them.
Waiting:Cards Sequence 2, 3, 4, 5, 6 should return the string 5 Bet
Waiting:Cards Sequence 7, 8, 9 should return the string 0 Hold
Waiting:Cards Sequence 10, J, Q, K, A should return the string -5 Hold
Waiting:Cards Sequence 3, 7, Q, 8, A should return the string -1 Hold
Waiting:Cards Sequence 2, J, 9, 2, 7 should return the string 1 Bet
Waiting:Cards Sequence 2, 2, 10 should return the string 1 Bet
Waiting:Cards Sequence 3, 2, A, 10, K should return the string -1 Hold




*/