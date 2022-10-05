//Write the function divideArray() in script.js that has a single numbers parameter containing an array of integers.
//The function should divide numbers into two arrays, evenNums for even numbers and oddNums for odd numbers. 
//Then the function should sort the two arrays and output the array values to the console.

function divideArray(numbers) {
    var evenNums = [];
    var oddNums = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenNums.push(numbers[i]);
        } else {
            oddNums.push(numbers[i]);
        }
    }
    evenNums.sort(function (a, b) { return a - b });
    oddNums.sort(function (a, b) { return a - b });

    console.log("Even numbers:");
    if (evenNums.length == 0) {
        console.log("None");
    } else {
        for (var i = 0; i < evenNums.length; i++) {
            console.log(evenNums[i]);
        }
    }
    //print odd numbers
    console.log("Odd numbers:");
    if (oddNums.length == 0) {
        console.log("None");
    } else {
        for (var i = 0; i < oddNums.length; i++) {
            console.log(oddNums[i]);
        }
    }
}