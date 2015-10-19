// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser");
    var db = require('./models');
    var mongoose = require('mongoose');
    

// CONFIG //
// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use("/static", express.static("public"));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));




app.get("/", function (req, res) {
	db.Post.find().exec(function(err, response) {
	res.render('index', { contents: response });
	});
});

app.get("/api/posts", function (req, res) {
	db.Post.find().exec(function(err, response) {
	res.json(response);
	});
});


app.post("/api/posts", function (req, res) {
	var contents = req.body.postContent; 
	db.Post.create({contents: contents}, function(error, post) {
		console.log('post saved: ', post);
	    res.json(post);
	});
});

app.get("/api/posts/:id", function (req, res) {
	db.Post.find({_id: req.params.id}).exec(function(err, response) {
	res.json(response);
	});
});







app.listen(3000, function (){
  console.log("listening on port 3000");
});