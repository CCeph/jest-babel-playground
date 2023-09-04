import capitalize from "./utils.js";

test('First letter is capital from capitalize', () => {
    expect(capitalize('test')[0]).toMatch(/[A-Z]/);
});

test("Remaining letters are lowercase", () => {
    expect(capitalize('test').substring(1,)).not.toMatch(/[A-Z]/);
})