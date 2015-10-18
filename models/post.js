var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
	location: String,
    description: String, 
    date: { type: Date, default: Date.now }
});

var Post = mongoose.model('Post', postSchema);


module.exports = Post;
