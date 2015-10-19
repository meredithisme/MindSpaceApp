var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/posts');

module.exports.Post = require('./post.js');