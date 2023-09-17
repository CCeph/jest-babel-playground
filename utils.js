export function capitalize(string) {
    let firstLetter = string[0].toUpperCase();
    let remainingLetters = string.substring(1,);
    return firstLetter + remainingLetters;
}

export function reverseString(string) {
    return string.split("").reverse().join("");
}

export const calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },

    subtract: function(num1, num2) {
        return num1 - num2;
    },

    divide: function(num1, num2) {
        if (num2 === 0) {return "Can't divide by 0"}

        return num1 / num2;
    },

    multiply: function(num1, num2) {
        return num1 * num2;
    }
}

function shiftLetter(letter, shiftFactor) {
    const characterCode = letter.charCodeAt(0);
    let asciiCodeStart;
    if (/[A-Z]/.test(letter)) {
        asciiCodeStart = 64;
    } else {
        asciiCodeStart = 96;
    }
    const alphabetNumber = characterCode - asciiCodeStart;
    let shiftedAlphabetNumber = alphabetNumber + shiftFactor;
    if (shiftedAlphabetNumber > 26) {
        shiftedAlphabetNumber -= 26;
    };
    const shiftedAlphabet = String.fromCharCode(shiftedAlphabetNumber + asciiCodeStart);
    return shiftedAlphabet;
}

export function caesarCipher(plainString, shiftFactor){
    while (shiftFactor > 25) {
        shiftFactor -= 25;
    }
    let plainStringArray = plainString.split("");
    let encryptedString = "";
    plainStringArray.forEach(letter => {
        encryptedString += shiftLetter(letter, shiftFactor);
    });
    return encryptedString;
}