// Reference to the result display element
let results = document.getElementById('result');

/**
 * Finds and counts occurrences of a specific word in the input text
 * Prompts user for the word to search
 * Converts both input and search word to lowercase for case-insensitive comparison
 */
const findWords = () => {
    let words = document.getElementById('inputText').value.toLowerCase();
    let wordToFind = prompt(`Enter Word To Find:`).toLowerCase();
    // Split input text into array of words using whitespace as delimiter
    let wordArray = words.trim().split(/\s+/);
    let count = 0;

    if (wordArray.includes(wordToFind)) {
        // Count all occurrences of the word
        for (let i = 0; i < wordArray.length; i++) {
            if (wordArray[i] === wordToFind) {
                count++;
            }
        }
        results.innerHTML = `The word "${wordToFind}" was found ${count} time(s).`;
    }
    else {
        results.innerHTML = `The word "${wordToFind}" was not found.`;
    }
}

/**
 * Counts the total number of characters in the input text
 * Includes all characters (letters, numbers, spaces, and special characters)
 */
const countChar = () => {
    let words = document.getElementById('inputText').value;
    results.innerHTML = `Character Count: ${words.length}`;
}

/**
 * Counts the total number of words in the input text
 * Words are considered to be separated by one or more whitespace characters
 */
const countWord = () => {
    let words = document.getElementById('inputText').value;
    // Split text into array of words and count the length
    let wordArray = words.trim().split(/\s+/);
    results.innerHTML = `Word Count: ${wordArray.length}`;
}