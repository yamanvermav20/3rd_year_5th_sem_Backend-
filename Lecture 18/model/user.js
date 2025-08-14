const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    names: String,
    email: String, 
    date: Date,
    blogs:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Blog"
        }
    ]
});
module.exports = mongoose.model('User', UserSchema);