// Your solution goes here
//Write a function called playGuessingGame() in script.js that has two parameters:
// 1. numToGuess is the number that the user has to guess.
// 2. totalGuesses is the total number of times the user is allowed to guess the number. The default value should be 10.

//The playGuessingGame() function should return the number of guesses the user took to enter the correct number. Ex: If the user guesses the correct number after 3 tries, the function should return 3. If the user does not guess the correct number before the number of guesses exceeds totalGuesses, the function should return 0.

//The playGuessingGame() function should call the JavaScript prompt() function to read the user's input, as shown below.

//The prompt text should reflect what the user previously entered:
// 1. If the user is making their first guess, the prompt should read: "Enter a number between 1 and 100."
// 2. If the user previously guessed a number < numToGuess, the prompt should read "X is too small. Guess a larger number.", where X is the number previously entered.
// 3. If the user previously guessed a number > numToGuess, the prompt should read "X is too large. Guess a smaller number.", where X is the number previously entered.
// 4. If the user enters an empty string or a string that is not a number, the prompt should read "Please enter a number." and give the user another chance to enter another number without losing a turn. Hint: Use isNaN().
// 5. If the user presses Cancel, playGuessingGame() should immediately return 0 without prompting for any more numbers.
// 6. If the user guesses the correct number, the function should return the number of guesses the user took to enter the correct number. Ex: If the user guesses the correct number after 3 tries, the function should return 3.

let playGuessingGame = function (numToGuess, totalGuesses = 10) {
  let guess = prompt("Enter a number between 1 and 100.");
  let guessCount = 1;
  while (guessCount <= totalGuesses) {
    if (guess === null) {
      return 0;
    } else if (isNaN(guess)) {
      guess = prompt("Please enter a number.");
    } else if (guess < numToGuess) {
      guess = prompt(guess + " is too small. Guess a larger number.");
    } else if (guess > numToGuess) {
      guess = prompt(guess + " is too large. Guess a smaller number.");
    } else if (guess == numToGuess) {
      return guessCount;
    }
    guessCount++;
  }
  return 0;
};
