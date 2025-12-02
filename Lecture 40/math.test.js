const math = require("./math");
/*
    {
    multiply, sub, modulo
    }
 */
jest.mock("./math");
/*
    {
    multiply: jest.fn(),
    sub: jest.fn(), 
    modulo: jest.fn()
    }
 */

test("multiplication of 2 and 3 is 6", () => {
    math.multiply.mockReturnValue(6);
    expect(math.multiply(2, 3)).toBe(6);
})