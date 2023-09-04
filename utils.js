export function capitalize(string) {
    let firstLetter = string[0].toUpperCase();
    let remainingLetters = string.substring(1,);
    return firstLetter + remainingLetters;
}

export function reverseString(string) {
    return string.split("").reverse().join("");
}