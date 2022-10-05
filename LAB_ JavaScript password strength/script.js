// Your solution goes here
// Write a function called isStrongPassword() in script.js that has a single password parameter.
//  The function should return true only if all the following conditions are true:
//  The password is at least 8 characters long.
//  The password does not contain the string "password". Hint: Use indexOf() to search for "password".
//  The password contains at least one uppercase character. Hint: Call the string method charCodeAt(index) to get the Unicode value of each character in the password. If a character code is between 65 and 90 (the Unicode values for A and Z), then an uppercase character is found.

function isStrongPassword(singlePassword) {
  if (singlePassword.length >= 8 && singlePassword.indexOf("password") === -1) {
    for (let i = 0; i < singlePassword.length; i++) {
      if (
        singlePassword.charCodeAt(i) >= 65 &&
        singlePassword.charCodeAt(i) <= 90
      ) {
        return true;
      }
    }
  }
  return false;
}

//test cases

console.log(isStrongPassword("password")); //false
console.log(isStrongPassword("password123")); //false
console.log(isStrongPassword("12345678")); //false
console.log(isStrongPassword("12345678A")); //true
console.log(isStrongPassword("12345678a")); //false
