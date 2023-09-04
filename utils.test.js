import capitalize from "./utils.js";

test('First letter is capital from capitalize', () => {
    expect(capitalize('test')[0]).toMatch(/[A-Z]/);
});