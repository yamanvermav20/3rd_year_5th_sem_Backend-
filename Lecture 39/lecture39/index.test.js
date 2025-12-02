const app = require("./index");
const request = require("supertest");

describe("POST /sum", () => {
  test("addition of two numbers 1 + 2 will be 3", async () => {
    let response = await request(app).post("/sum").send({
      a: 1,
      b: 2
    });

    expect(response.body.data).toBe(3);
  });

  it("should return invalid argument for missing input", async () => {
    let response = await request(app).post("/sum").send({
      a: -1
    });

    expect(response.body.data).toBe("invalid argument");
  });
});