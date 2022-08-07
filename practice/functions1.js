// Practicing with basic function declaration and invocation

// Function declaration
function letterFinder(word, match) {
    for (i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log("Found the", match, "at", i);
        } else {
            console.log("---No match found at", i);
        }
    }
}

// Invoking the function
letterFinder("test", "t");