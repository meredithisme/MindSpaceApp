var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
	location: String,
    postCount: Number, 
    contents: String,
    date: { type: Date, default: Date.now }
});

var Post = mongoose.model('Post', postSchema);


module.exports = Post;
