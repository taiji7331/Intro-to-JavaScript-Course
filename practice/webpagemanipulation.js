// Takes user input and inserts it into body of page
let answer = prompt('What is your name?');
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1')
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
}

// Creates an input on the page
var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

// Adds an event listener that detects when text is typed in the input
input.addEventListener('change', function() {
    console.log(input.value)
})

// This version instead changes the value of the text on the page
input.addEventListener('change', function() {
    h1.innerText = input.value
})