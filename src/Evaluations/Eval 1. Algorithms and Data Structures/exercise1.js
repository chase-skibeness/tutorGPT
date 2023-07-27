// Implement a function in JavaScript that checks whether a string is a palindrome or not using a stack data structure.

function palindromeChecker (checkString) {
    const forwardStack = [];
    const backwardStack = [];

    for (let index = 0; index < checkString.length; index++) {
        forwardStack.push(checkString[index]);
        backwardStack.push(checkString[checkString.length - 1 - index]);
    };
    return forwardStack.join("") === backwardStack.join("");
}

module.exports = palindromeChecker;