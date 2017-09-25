//bring in the express library
var express = require('express');

// create an express application (aka a web server)
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
});

// respond with "hello rabah" when a GET request is made to /rabah
app.get('/rabah', function (req, res) {
res.send('Get bossy')
});

// look in the environment variable PORT for this value
// if its not present, use 3000
// this means in dev you dont have to specify it
// https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html
var PORT = process.env.PORT || 3000;

// start your webserver at port PORT
// once started announce/print the port number in
// the terminal
app.listen(PORT, function () {
  console.log('Example app listening on port ', PORT);
  console.log("Press CTRL+C to quit");
});