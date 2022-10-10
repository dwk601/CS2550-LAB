//Professor X has written a JavaScript function findAverage() to help his students compute homework score averages. The findAverage() function returns the average of an array of homework scores. Professor X's students complain that sometimes findAverage() returns NaN or unexpected answers. Professor X suspects the problems are due to students passing findAverage() an empty scores array or an array with improperly formatted scores.

//Modify findAverage() to throw exceptions for the following reasons:
//No scores are in the scores array.
//A negative score was found in the scores array.
//A non-integer was found in the scores array.

//Wrap the existing function calls to findAverage() in a try-catch statement, and output any thrown exceptions to the console. The program should continue to try the next call to findAverage() regardless of any exceptions thrown.

//To determine if a non-integer exists in the scores array, use Number.isInteger(n), which returns true if n is an integer, and false otherwise.

// function findAverage(scores) {
//   var total = 0;
//   for (var i = 0; i < scores.length; i++) {
//     if (scores[i] < 0) {
//       throw "Negative score found";
//     }
//     if (!Number.isInteger(scores[i])) {
//       throw "Non-integer found";
//     }
//     total += scores[i];
//   }
//   if (scores.length === 0) {
//     throw "No scores in array";
//   }
//   return total / scores.length;
// }

// try {
//   console.log(findAverage([90, 98, 89, 100, 100, 86, 94]));
//   console.log(findAverage([90, 98, 89, 100, 100, 86, 94]));
//   console.log(findAverage([90, 98, 89, 100, 100, 86, 94, 102]));
//   console.log(findAverage([90, 98, 89, 100, 100, 86, 94, "A"]));
//   console.log(findAverage([]));
// } catch (e) {
//   console.log(e);
// }

//The caesarCipher() function below uses a Caesar cipher to encrypt or decrypt a message. The message parameter is the message being encrypted or decrypted. The key parameter is the number of characters to shift each letter in the message up or down the alphabet. Ex: A key of 1 shifts each letter up by 1, so "A" becomes "B", "B" becomes "C", etc. A key of -2 shifts each letter down by 2, so "C" becomes "A", "D" becomes "B", etc. Letters at the end of the alphabet wrap back to the beginning, and vice versa.

//The caesarCipher() function is called to encrypt a saying of Caesar's. The same message is decrypted using the negative of the key.

//Improve the caesarCipher() function by adding exceptions:
//Throw a TypeError if the message parameter is not a string. Use JavaScript's typeof operator to check if message is a string: if (typeof message === "string") // true if message is a string
//Throw a TypeError if the key is not an integer. Use the Number.isInteger() method to check the key.
//Throw a RangeError if the key is not between -25 and 25.

//Use a try-catch statement to call caesarCipher() and verify the proper exception is thrown when using incorrect arguments. Ex: caesarCipher(123, 5) should throw a TypeError because 123 is not a string. In the catch block, output one of the following Caesar quotes:
//"Men willingly believe what they wish." if the exception thrown is a TypeError.
//"The die is cast." if the exception thrown is a RangeError.

// function caesarCipher(message, key) {
//   if (key < -25 || key > 25) {
//     throw RangeError("Key must be between -25 and 25");
//   }
//   if (!Number.isInteger(key)) {
//     throw TypeError("Key must be an integer");
//   }
//   if (typeof message !== "string") {
//     throw TypeError("Message must be a string");
//   }
//   var output = "";
//   for (var i = 0; i < message.length; i++) {
//     var c = message.charCodeAt(i);
//     if (65 <= c && c <= 90) {
//       output += String.fromCharCode(((c - 65 + key) % 26) + 65); // Uppercase
//     } else if (97 <= c && c <= 122) {
//       output += String.fromCharCode(((c - 97 + key) % 26) + 97); // Lowercase
//     } else {
//       output += message.charAt(i); // Copy
//     }
//   }
//   return output;
// }

// try {
//   console.log(caesarCipher(123, 5));
// } catch (e) {
//   if (e instanceof TypeError) {
//     console.log("Men willingly believe what they wish.");
//   } else if (e instanceof RangeError) {
//     console.log("The die is cast.");
//   }
// }

// function processNumbers(numberElements) {
//   // Code will be tested with different values of numberElements
//   let result = 0;

//   for (let index = 0; index < numberElements.length; index++) {
//     //Add a throw statement to the processNumbers function that throws the message "An element is not a number." if one of the elements in numberElements is not a number. Hint: The function isNaN() returns true if the parameter is not a number.
//     if (isNaN(numberElements[index])) {
//       throw "An element is not a number.";
//     }
//     result += numberElements[index];
//   }

//   result += numberElements[index] * 1.3 * index;
// }

// return result;

// let numList = [1, 2, 5, 7]; // Code will be tested with different arrays.
// let processedValue = 0;

// //Surround the call to processNumbers with a try-catch statement. The catch block should display the thrown message and assign processedValue with -1.
// try {
//   processedValue = processNumbers(numList);
// } catch (e) {
//   console.log(e);
//   processedValue = -1;
// }

// let numList = [1, 2, 5, 7]; // Code will be tested with different arrays.
// let processedValue = 0;

// try {
//   processedValue = processNumbers(numList);
// } catch (exception) {
//   processedValue = -1;
// } finally {
//   //Add a finally statement that displays "Data is saved.".
//   console.log("Data is saved.");
// }

//Throw a RangeError exception if any of the numbers is greater than 75. Throw an Error exception if the parameter has less than 2 elements.
function processNumbers(numList) {
  let result = 0;

  if (numList.length < 2) {
    throw new Error("The parameter has less than 2 elements.");
  }

  for (let index = 0; index < numList.length; index++) {
    if (numList[index] > 75) {
      throw new RangeError("The number is greater than 75.");
    }
    result += numList[index];
  }

  return result;
}
