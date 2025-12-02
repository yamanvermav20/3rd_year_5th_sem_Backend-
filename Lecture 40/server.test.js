// const { describe } = require("yargs");
const User = require("./model/user.schema");
const request = require("supertest")
const app = require("./server.js")
jest.mock("./model/user.schema");

describe("POST /api/users/register", () => {
    it("should return user Exist, If he try to  register with email which are already present in database", async () => {
        User.findOne.mockResolvedValueOnce(true)
        let response =await request(app)
        .post("/api/users/register")
        .send({
            name: "Yaman",
            email: "yv@gmail.com",
            password: "123"
        });
        expect(response.body.message).toBe("User already exists");
    })
})