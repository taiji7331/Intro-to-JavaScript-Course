let greet = "Hello";
let place = "World";
// This is amazing. Assuming this is best practice, template strings seem much more useful
console.log(`${greet} ${place} !`)

// Unlike regular strings, template strings can include line breaks. This may or may not be best practice.
console.log(`Hello
World
!`)

// Template literals can also evaluate expressions.
console.log(`${1 + 1 + 1 + 1 + 1} stars!`)

// This is something worth researching and playing with. Very useful