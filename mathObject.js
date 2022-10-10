// x = Math.sin(Math.PI / 2);
// // result: 1

// x = Math.pow(2, 3);
// // result: 8

// x = Math.sqrt(9);
// // result: 3

// x = Math.round(12.6) + Math.floor(3.7);
// // result: 16

// x = Math.max(9, 14, -26);
// // result: 14

//The displayCard(rank, suit) function displays a playing card to the console, given the rank (1-13) and suit (0-3).
//Write a for loop that calls displayCard() 10 times, each time with a random rank and suit.

function displayCard(rank, suit) {
  switch (rank) {
    case 1:
      rank = "Ace";
      break;
    case 11:
      rank = "Jack";
      break;
    case 12:
      rank = "Queen";
      break;
    case 13:
      rank = "King";
      break;
  }
  switch (suit) {
    case 0:
      suit = "Hearts";
      break;
    case 1:
      suit = "Diamonds";
      break;
    case 2:
      suit = "Clubs";
      break;
    case 3:
      suit = "Spades";
      break;
  }
  console.log(rank + " of " + suit);
}

displayCard(5, 0); // 5 of Hearts
displayCard(13, 1); // K of Diamonds
displayCard(1, 2); // A of Clubs
displayCard(10, 3); // 10 of Spades
