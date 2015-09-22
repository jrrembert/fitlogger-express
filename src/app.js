'use strict';

var express = require('express');
var posts = require('./mock/posts.json');

var app = express();

// Route for site root
// Request = req, response = res per convention
app.get('/', function(req, res) {
	res.send("<h1>I (sometimes) love fitness!</h1>");
})


app.get('/blog', function(req, res){
    res.send(posts);
});

app.get('/blog/:title', function(req, res){
    var title = req.params.title;
    var post = posts[title];
    res.send(post);
});


app.listen(3000, function() {
	console.log("The frontend server is running on port 3000. Press Control-C to quit.")
});