// let latestUpdate = new Date(2010, 3, 21);

// //Update the variable latestUpdate to the day 19 using Date methods.
// latestUpdate.setDate(19);

// let interestingEvents = {
//   "Long distance telegraph": new Date(1844, 4, 24),
//   "First telephone call": new Date(1876, 2, 10),
//   "Microsoft founded": new Date(1975, 3, 4),
//   "World Wide Web born": new Date(1989, 2, 1),
//   "Google founded": new Date(1998, 8, 4),
//   "Facebook website launch": new Date(2004, 1, 4),
// };
// let interestingDate = interestingEvents["Facebook website launch"]; // Code also tested using date of First telephone call

// //Display the date when Facebook's website launched in M/DD/YYYY format. Hint: getMonth() gets the month (0-11). getDate() gets the day relative to the current set month. getFullYear() gets the 4 digit year. Ex: The 31st of January 1970 should be displayed as: "1/31/1970".
// console.log(
//   interestingDate.getMonth() +
//     1 +
//     "/" +
//     interestingDate.getDate() +
//     "/" +
//     interestingDate.getFullYear()
// );

// let interestingEvents = {
//   "Long distance telegraph": new Date(1844, 4, 24),
//   "First telephone call": new Date(1876, 2, 10),
//   "Microsoft founded": new Date(1975, 3, 4),
//   "World Wide Web born": new Date(1989, 2, 1),
//   "Google founded": new Date(1998, 8, 4),
//   "Facebook website launch": new Date(2004, 1, 4),
// };
// let currentDate = new Date();
// let interestingDate = interestingEvents["Google founded"]; // Code also tested using date of First telephone call
// let hoursPassed = 0;

// //Assign hoursPassed with the number of hours passed since Google was founded and today. Hint: Make sure to use getTime() to return milliseconds. Convert the milliseconds between currentDate and interestingDate to hours. 1000 milliseconds are in a second, 60 seconds are in a minute, etc.
// hoursPassed = Math.floor(
//   (currentDate.getTime() - interestingDate.getTime()) / 1000 / 60 / 60
// );
// console.log(hoursPassed);
