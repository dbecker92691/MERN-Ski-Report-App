const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId;

const postSchema = new mongoose.Schema({
    mountain: String,
    body: String
});



module.exports = mongoose.model('Post', postSchema);

