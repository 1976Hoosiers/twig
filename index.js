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
// Twilio Credentials 
var accountSid = 'AC368afb7545f5c85c1e85f67d5f417573'; 
var authToken = 'eb7f3039336bf151266238455fa45bed'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
  
client.messages.create({ 
    to: "+13173586459", 
    from: "+15125999970", 
    body: "OMG rabah is the coolest 🤴", 
}, function(err, message) { 
    console.log(message.sid); 
});
}

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