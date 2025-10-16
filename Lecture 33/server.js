const express = require("express");
const app = express();
const { createClient } = require("redis");

const client = createClient();

client.on("error", function (err) {
    console.log(err);
});

async function connect() {
    await client.connect();
}

// connect()
// .then(() => {
//     app.listen(30000, () => {
//         console.log("Server is Started");
//     })
// })

async function cachedData() {
    await client.set("user:100", JSON.stringify([{
        name: "yaman",
        age: "19"
    }]));
}

async function readUser(){
    let user = await client.get("user:100");
    return user;
}

connect()
.then(() => {
    cachedData()
    .then(() => {
        console.log("data cached successfully");
        return readUser();
    })
    .then((data) => {
        console.log(JSON.parse(data));
    });
});
