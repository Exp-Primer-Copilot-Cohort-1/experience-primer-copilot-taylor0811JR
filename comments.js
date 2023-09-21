// Create web server
// Run: node comments.js
// Test: curl -d '{"author":"Scott", "text":"This is my comment"}' -H "Content-Type: application/json" http://localhost:3000/api/comments

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var db;

// Connect to the database
MongoClient.connect('mongodb://localhost:27017/comments', function(err, database) {
  if (err) throw err;

  db = database;

  // Start the application after the database connection is ready
  app.listen(3000);
  console.log("Listening on port 3000");
});

// Serve static content
app.use(express.static('public'));
app.use(bodyParser.json());

// API routes
app.get('/api/comments', function(req, res) {
  db.collection('comments').find().toArray(function(err, docs) {
    if (err) throw err;
    res.json(docs);
  });
});

app.post('/api/comments', function(req, res) {
  db.collection('comments').insertOne(req.body, function(err, result) {
    if (err) throw err;
    res.json(result.ops[0]);
  });
});