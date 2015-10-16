var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var BlogSchema = new Schema({
    name: String,
    yumminess: String
});



var Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;