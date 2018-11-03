const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const postSchema = new mongoose.Schema({
    mountain: String,
    post: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});



module.exports = mongoose.model('Post', postSchema);

