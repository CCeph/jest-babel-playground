import capitalize from "./utils.js";

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
    expect(reverseString('ell0529World').toBe('dlroW9250lle'));
})