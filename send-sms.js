// Twilio Credentials 
var accountSid = 'AC368afb7545f5c85c1e85f67d5f417573'; 
var authToken = 'insert key'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "+17372224053", 
    from: "+15125999970", 
    body: "Rabah's makes me so happy. Rabah is the best. I am so lucky to have him.", 
}, function(err, message) { 
    console.log(message.sid); 
});