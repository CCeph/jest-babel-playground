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
    expect(calculator.subtract(1,2)).toBe(-1);
})

test("Calculator, subtract: can subtract negative numbers", () => {
    expect(calculator.subtract(-3, 5)).toBe(-8);
})

test("Calculator, subtract: can subtract with 0", () => {
    expect(calculator.subtract(52, 0)).toBe(52);
})

test("Calculator, divide: can divide with positive numbers", () => {
    expect(calculator.divide(1,2)).toBeCloseTo(0.5);
})

test("Calculator, divide: can divide with negative numbers", () => {
    expect(calculator.divide(-10, 2)).toBe(-5);
})

test("Calculator, divide: returns error string when dividing by 0", () => {
    expect(calculator.divide(15, 0)).toBe("Can't divide by 0");
})

test("Calculator, divide: can divide 0 by something", () => {
    expect(calculator.divide(0, 15)).toBe(0);
})

test("Calculator, multiply: can multiply positive numbers", () => {
    expect(calculator.multiply(6, 2)).toBe(12);
})

test("Calculator, multiply: can multiply negative numbers", () => {
    expect(calculator.multiply(-6, 2)).toBe(-12);
})

test("Calculator, multiply: can multiply by 0", () => {
    expect(calculator.multiply(5, 0)).toBe(0);
})