// Task 1: Using the logical && operator
var score = 8;

// In my first attempt, I used the concatenation operator with parentheses to solve the problem
console.log("Mid-level Skills: " + (score > 0 && score < 10));
// The solutions page showed that they used a comma instead. Both solutions seem valid.
console.log("Mid-level Skills:", score > 0 && score < 10);


// Task 2: Using the logical || operator
var timeRemaining = 0;
var energy = 10;

// See above, the solutions page showed commas instead of concatenation
console.log("Game Over: " + (timeRemaining == 0 || energy == 0));

// Task 3: Using the modulus operator, %, to test if a given number is odd
var num1 = 2;
var num2 = 5;
test1 = num1 % 2;
test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;

console.log("Is", num1, "an even number?:", result1);
console.log("Is", num2, "an even number?:", result2);

// Task 4: Add numbers using the + operator
console.log(5 + 10);

// Task 5: Concatenate numbers and strings using the + operator
var now = "Now in ";
var three = 3;
var d = "D!";

console.log(now + three + d);

// Task 6: Use the += operator to accumulate values in a variable
var counter = 0;
counter += 5;
counter += 3;

console.log(counter);
