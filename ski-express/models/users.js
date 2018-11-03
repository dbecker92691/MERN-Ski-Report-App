const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;


const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
})

module.exports = mongoose.model('User', userSchema);