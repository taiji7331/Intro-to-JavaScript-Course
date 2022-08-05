var petDog = "Rex";
var petCat = "Pepper";

console.log(petDog);
console.log(petCat);

console.log("My pet dog's name is: " + petDog);
console.log("My pet cat's name is: " + petCat);

var catSound = "purr";
var dogSound = "woof";

// I wanted to use both ways of concatenating strings to see how their behavior differs
// Traditional concatenation: using the + operator. In this case, spaces must be added to string literals manually.
console.log(petDog + " says " + dogSound);
// Comma delineated lists: This seems to have the behavior of automatically adding spaces between items. 
console.log(petCat, "says", catSound);

catSound = "meow";

console.log(petCat, "now says", catSound);
