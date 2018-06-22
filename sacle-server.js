// var http = require('http');

// http.createServer(function(req, res){
//     res.write("Hello");
//     res.foo.bar;        //
//     res.end("Client!");
// }).listen(9000);

// var express = require('express');
// var app = express();
// app.get("/", function(req, res){
//     res.write("Hello");
//     res.foo.bar;
//     res.end("NodeJS");
// })
// app.use(function(err, req, res, next){
//     //if(err) throw err;
//     res.end("ERROR");
// })
// app.listen(9070, function(){
//     console.log("Server started")
// });


var cluster = require('cluster');
var NUMBER_OF_CORES = require('os').cpus().length;
var worker;
if(cluster.isMaster){
    console.log("Master Thread Started!")
    for(var i =0 ; i< NUMBER_OF_CORES ; i ++){
        worker = cluster.fork();
    }
    worker.on('message', function(msg){
        console.log("Worker Says : " + msg);
    })
}else{
    console.log("Worker Thread Started !");
    console.log(cluster.worker.process.pid);
    process.send("Hello Master!");
    process.exit();
}

cluster.on('exit', function(worker, code, signal){
    console.log("Worker terminated was " + worker.process.pid);
})
