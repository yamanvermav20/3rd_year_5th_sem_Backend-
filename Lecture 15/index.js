const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.send("Hello guys");
})

app.post("/addUser", (req, res) => {
    try{
        let email = req.body.email;
        let password = req.body.password;
        let newUser = {
            email, 
            password
        }
        console.log(email, password);
        res.json({
            success: true,
            data: newUser,
            message: "user added successfully"
        })

    }
    catch(error){
        res.json({
            success: false,
            error: error
        })
    }
    // res.send(`Email is ${email}, and the Password is ${password}`);
})

app.listen(3000, () => {
    console.log("Server is Started 🤠");
})