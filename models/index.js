var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mindspaceapp");

module.exports.Blog = require("./Blog");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback){
	console.log("db is open for business");

});