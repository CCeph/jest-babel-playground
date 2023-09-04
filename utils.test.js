import { capitalize, reverseString, calculator } from "./utils.js";

test('First letter is capital from capitalize', () => {
    expect(capitalize('test')[0]).toMatch(/[A-Z]/);
});

test("Remaining letters are lowercase", () => {
    expect(capitalize('test').substring(1,)).not.toMatch(/[A-Z]/);
})

test('reverseString: String with numbers is reversed', () => {
    expect(reverseString('12345')).toBe('54321');
})

test('reverseString: String with letters and numbers is reversed', () => {
    expect(reverseString('ell0529World')).toBe('dlroW9250lle');
})

test('Calculator, add: can add positive numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
})

test("Calculator, add: can add negative numbers", () => {
    expect(calculator.add(-3, 5)).toBe(2);
})

test("Calculator, add: can add with 0", () => {
    expect(calculator.add(56, 0)).toBe(56);
})

test("Calculator, substract: can subtract positive numbers", () => {
    expect(calculator.substract(1,2)).toBe(-1);
})

test("Calculator, subtract: can subtract negative numbers", () => {
    expect(calculator.subtract(-3, 5)).toBe(-8);
})

test("Calculator, subtract: can subtract with 0", () => {
    expect(calculator.subtract(52, 0)).toBe(52);
})