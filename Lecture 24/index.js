const express = require('express');
const mongoose = require('mongoose');
const Blog = require("./model/blog")
const User = require("./model/user")
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//middleware to verify jwt token
function isLogin(req, res, next){
    let token = req.headers.authorization; //❌ not case-sensitive
    console.log(token)
    if(!token){
        return res.json({
            success: false,
            message: "Please provide a token or login"
        })
    }
    let decode = jwt.verify(token, "lop")
    if(decode){
        req.username = decode.user.name;
        return next()
    }
    res.json({
        success: false,
        message:"Please Login"
    })
}
app.post("/login", async (req, res) => {
    let {email, password} = req.body;
    let userExist = await User.findOne({email : email});
    if(!userExist) {
        return res.json({
            success:false,
            message:"please signup"
        })
    }
    if(userExist.password != password){
        return res.json({
            success: false,
            message: "Incorrect password"
        })
    }
    let token = jwt.sign({"userId" : userExist._id}, "lop")
    res.json({
        success: true,
        message: "Login successfull",
        token: token
    })
})
//create
app.post("/blogs", isLogin, async(req, res) => {
    let title = req.body.title;
    let body = req.body.body;
    let userId = req.body.userId;

    let blog = {
        title: title,
        body: body,
        date: Date.now(),
        userId: userId
    }
    let newBlog = new Blog(blog)
    await newBlog.save()

    let user = await User.findById(userId);

    if(!user){
        return res.json({
            success: false,
            message: "Invalid user"
        });
    }

    user.blogs.push(newBlog._id);
    await user.save();

    res.json({
        success: true,
        message: "blog added successfully",
        data : newBlog
    })
})

app.delete("/blogs/:blogId", async (req, res) => {
    let blogId = req.params.blogId;
    let userId = req.body.userId;
    let blogExist = await Blog.findById(blogId);
    if(!blogExist){
        return res.json({
            success: false,
            message: "blog does not exist"
        })
    }
    if(blogExist.userId != userId){
        return res.json({
            success: false,
            message:"Permission denied"
        })
    }
    await Blog.findByIdAndDelete(blogId);
})
//Read
//read all data
//read single data

app.get("/blogs", async(req, res) => {
    let allBlogs = await Blog.find()
    res.json({
        success: true,
        message: "all data fetched succesfully",
        data : allBlogs
    })
})
app.get("/blogs/:id", async (req, res) => {
    let id = req.params.id;
    let blog = await Blog.findById(id);
    res.json({
        success: true, 
        message: "blog fetched successfully",
        data : blog
    })

})



//User Database
app.post("/user", async(req, res) => {
    let names = req.body.names;
    let email = req.body.email;
    let user = {
        names: names,
        email: email,
        date: Date.now(),
        blogs: [] // initialize empty blogs array

    }
    let newUser = new User(user)
    await newUser.save()
    res.json({
        success: true,
        message: "User added successfully",
        data : newUser
    })
})
app.get("/user", async(req, res) => {
    let allUsers = await User.find()
    res.json({
        success: true,
        message: "all data fetched succesfully",
        data : allUsers
    })
})
app.get("/user/:id", async (req, res) => {
    let id = req.params.id;
    let user = await User.findById(id);
    res.json({
        success: true, 
        message: "blog fetched successfully",
        data : user
    })

})


mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

app.listen(3000, () => {
    console.log("Server is Started")
})
