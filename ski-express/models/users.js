const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    isLoggedIn: Boolean
})

module.exports = mongoose.model('User', userSchema);