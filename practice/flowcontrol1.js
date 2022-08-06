// Practice using if/else and switch statements in JavaScript

// Are You Old Enough?
var age = 10;

if (age >= 65) {
    console.log("You get your income from your pension.");
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary.");
} else if (age < 18) {
    console.log("You get an allowance.");
} else {
    console.log("The value of the age variable is not numerical.");
}

// Days of the week
var day = "Sunday";

switch(day) {
    case "Monday":
        console.log("Go swimming.");
        break;
    case "Tuesday":
        console.log("Ride a bike.");
        break;
    case "Wednesday":
        console.log("Eat pizza.");
        break;
    case "Thursday":
        console.log("Watch a movie.");
        break;
    case "Friday":
        console.log("Go to bed late.");
        break;
    case "Saturday":
        console.log("Go shopping.");
        break;
    case "Sunday":
        console.log("Sleep in.");
        break;
    default:
        console.log("There is no such day.");
}