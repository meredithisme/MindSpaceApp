var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mindspaceapp");

module.exports.Blog = require("./Blog");