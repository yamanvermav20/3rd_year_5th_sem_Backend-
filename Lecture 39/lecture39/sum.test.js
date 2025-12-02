const sum = require("./sum");
test("addition of two numbers 1 + 2 will be 3", () => {
    expect(sum(1, 2)).toBe(3);
});
test("all argument must be pass", () => {
    expect(sum()).toBe("invalid argument");
});