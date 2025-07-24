const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"));

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// })
// app.get("/about.html", (req, res) => {
//     res.sendFile(__dirname + "/about.html");
// })
// app.get("style.css", (req, res) => {
//     res.sendFile(__dirname + "./style.css");
// })
app.post("/addUser", (req, res) =>{
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;
    res.json({
        username, 
        password
    })
})
app.listen(3000, () =>{
    console.log("Server is started");
})