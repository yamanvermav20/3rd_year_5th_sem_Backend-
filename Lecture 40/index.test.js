// const jest = require("jest");
const sum = jest.fn(); //function mocking --it creates a new function
sum.mockReturnValueOnce(5);
test("addition of 2 and 3 is 5", () => {
    // let value = sum().mockReturnValue(5);
    expect(sum(4, 5)).toBe(5);
})