const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const BlogPost = new Schema({
    title: String,
    body: String, 
    date: Date,
    UserId:{
        type: mongoose.Types.ObjectId,
        ref:"User"
    }
});
module.exports = mongoose.model('Blog', BlogPost);