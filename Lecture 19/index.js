const express = require('express');
const mongoose = require('mongoose');
const Blog = require("./model/blog")
const User = require("./model/user")
const app = express();
let blogRoutes = require("./routes/blogRoutes");
let userRoutes = require("./routes/userRoutes");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//create
app.use("/api/blogs", blogRoutes);
app.use("/api/users", userRoutes);


mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

app.listen(3000, () => {
    console.log("Server is Started")
})
