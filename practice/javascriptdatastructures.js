// ForEach method on arrays
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

// Filter method on arrays
const nums = [0,10,20,30,40,50];
function filterLow(num) {
    return num > 20;
}
console.log(nums.filter(filterLow))

// Map method on arrays
function mapTenth(num) {
    return num / 10
}
console.log(nums.map(mapTenth));

// Convert object to array
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)

// Using maps
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
console.log(bestBoxers.get(1));

// Sets (only unique values)
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);