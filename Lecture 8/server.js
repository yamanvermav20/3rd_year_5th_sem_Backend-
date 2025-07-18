const express = require("express");
const app = express();
console.log(app);

app.get("/", (req, res) => {
    console.log(req);
    // res.send("hello world")
    // res.send("<h1> hello world </h1>");
    res.json({
        name: "Yaman",
        address: "Punjab",
        isLogin : true
    })
})
//path param/variable!
//1. Params
app.get("/users/:id", (req, res) => {
    console.log(req.params.id);
    let id = req.params.id;
    res.send(id);
    // res.send("ok");
})

//2. Query Parameter;
app.get("/blogs", (req,res) => {
    console.log(req.query.title)
    console.log(req.query.id)
    res.send("got it");
})



app.listen(3000, (req, res) => {
    console.log("Server is Started ");
})