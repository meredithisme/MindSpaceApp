var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var BlogSchema = new Schema({
    post: String,
    comments: String
});



var Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;