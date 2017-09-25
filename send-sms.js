// Twilio Credentials 
var accountSid = 'AC368afb7545f5c85c1e85f67d5f417573'; 
var authToken = 'eb7f3039336bf151266238455fa45bed'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "+13173586459", 
    from: "+15125999970", 
    body: "This is the ship that made the Kessel Run in fourteen parsecs?", 
}, function(err, message) { 
    console.log(message.sid); 
});