// Defensive programming exercise

// Original function
// function letterFinder(word, match) {
//     for(i = 0; i < word.length; i++) {
//         if(word[i] == match) {
//             console.log('Found the', match, 'at', i)
//         } else {
//             console.log('---No match found at', i)
//         }
//     }
// }

// Refactored to be less error prone
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if (condition1 == true && condition2 == true) {
        for (i = 0; i < word.length; i++) {
            if (word[i] == match) {
                console.log('Found the', match, 'at', i);
            } else {
                console.log('---No match found at', i);
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.");
    }
}

// Failing test
letterFinder(1, 2);

// Passing test
letterFinder("cat", "c");