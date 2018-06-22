var express = require('express');
var app = express();
var http  = require('http');
var server = http.createServer(app);
var io = require('socket.io')(server);
var mongoUtil = require('./mongoUtil');
mongoUtil.connect();
var username ;
var messageStack = [];

app.use(express.static(__dirname+'/public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/socket-client.html");
})

io.on('connection', function(client){
    console.log('Connection Accepted!');
    //Sending message to client
    client.emit("acknowledge", {status : "Connection Accepted!"});
    //Receiving message from client
    client.on("thanks", function(clientMsg){
        console.log("Client says : " + clientMsg);
    });
    client.on("MsgToServer", function(chatterName, message){
        messageStack.push(message);
        username = chatterName;
        console.log(chatterName +" Message : " + message);
        client.emit("MsgToClient",'Me', message);
        client.broadcast.emit("MsgToClient",chatterName, message);
    })
    client.on("disconnect", function(){
        console.log("Disconnecting...");
        var key = {
            username : username,
            message : messageStack
        }
        mongoUtil.insertUser(key)
            .then(function(response){
                console.log(response);
            })
    })
})

server.listen(9090, function(err){
    if(err){console.log(err)}
  
})