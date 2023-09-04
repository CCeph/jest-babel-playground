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
}