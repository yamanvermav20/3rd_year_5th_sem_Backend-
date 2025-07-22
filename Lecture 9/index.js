const express = require("express");
const app = express();
console.log(app);

const fs = require("fs")
const { read, write } = require("../Lecture 9/IO/io");

app.use(express.json());

app.get("/", (req, res) => {
    console.log(req);
    res.send("hello world")
})

app.post("/form", (req, res) => {
    console.log(req.body);
    res.send(`Received data ${req.body.name}, ${req.body.email} in res.send`);
    console.log(`Received data ${req.body.name}, ${req.body.email}`)

    async function writing() {
        try {
            let users = [];
            try{
                users = await read("./Formdata.txt");
            }
            catch(e){
                console.log("No existing data or empty file");
            }
            users.push(req.body);
            await write("./Formdata.txt", JSON.stringify(users));
            console.log("Users written to file");
        } catch (err) {
            console.error("Error writing to file:", err);
        }
    }   
    writing();
})

// app.post("/login", (req, res) => {
//     console.log(req.body);
//     async function LoginCheck(name, email) {
//         let userData = await read("./Formdata.txt");
//         userData = JSON.parse(userData);
//         let isUserValid = userData.find((u) => {
//             return u.email == email
//         });

//         if(!isUserValid){
//             console.log("User is valid");
//         }

//     }   
//     LoginCheck(req.body.name, req.body.email)
// })



app.listen(3000, (req, res) => {
    console.log("Server is Started ");
})