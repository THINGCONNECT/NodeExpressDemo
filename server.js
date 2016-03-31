var express = require('express');
var app = express();

// We will create a variable to hold our data
var storedData = "No Data";

// The endpoint to check the stored information
// eg. http://serveraddress:3000/
app.get('/', function (req, res) {
  res.send('Stored Data Output: ' + storedData);
});

// The endpoint to save information
// eg. http://serveraddress:3000/save?payload=HELLO
app.get('/save', function (req, res) {

  //Check to see if the query string is valid
  if(req.query && req.query.payload) {
    storedData = req.query.payload;
    res.send("Saved");
  }else{
    res.send("Not saved");
  }

});

// This starts the server
app.listen(3000, function () {
  console.log('Thingconnect demo server running on 3000');
});