// Join arrays or objects using the rest operator
// Array
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']

// Output is a single array with all the items
// IE [apple, pear, plum, blueberry, strawberry]
// In comparison, if the rest operator is not used [fruits, berries]
// It joins the two arrays into an array of arrays [[apple, pear, plum],[blueberry, strawberry]]
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

// Object
const flying = { wings: 2 }
const car = { wheels: 4 }
// This one takes the properties of the two objects and creates a new object with those properties
// If you don't use the rest operator, it instead makes an object which houses the two objects
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

// Adding new members to arrays using rest operator
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

// Turn a string into an array of chars
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

// Copy an object into a new object, then edit the old one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)

// Copy an array into a new array, then edit the old one
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)

// Bonus: destructuring
const testArray = [1, 5, 6, 9, 15];
let [test1, test2, test3] = testArray;
console.log(test1); // Only grabs the first item from the array, so should output 1
console.log(test2, test3) // It grabs items from the array in order