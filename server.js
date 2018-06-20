//import { request } from 'http';

// var path = require('path');
// var url = "http://www.example.com/public/index.html";
// console.log(path.basename(url));
// console.log(path.extname(url));
// console.log(path.dirname(url));


// var os = require('os');
// console.log("Total Memory : " + os.totalmem());
// console.log("Free Memory : " + os.freemem());
// console.log("OS Architecture : " + os.arch());
// console.log("# of CPU's :" + os.cpus().length);

// var inherits = require('util').inherits;
// function Animal(name){
//     this.walk = function(){
//         console.log(name + " can Walk!")
//     }
// }

// function Bird(name){
//     Animal.call(this, name);
//     this.fly = function(){
//         console.log("Can Fly!")
//     }
// }
// inherits(Bird, Animal);
// var sparrow =  new Bird("Sparrow");
// sparrow.fly();
// sparrow.walk();

// Animal.prototype.listen = function(){
//     console.log("Can listen!");
// }
// sparrow.listen();



// var http = require('http');
// var open = require("open");
// var fs = require('fs');

// var port = 3000;
// var server = http.createServer(function(request, response){
//     //console.log(request.headers);
//     request.on('readable', function(){
//         console.log("inside readable");
//         var chunk = null;
//         //Uploading
//         //request.pipe(fs.createWriteStream("test2.txt"));
//         request.pipe(fs.createWriteStream("readme_copy.md"));
//         //Downloading
//        // fs.createReadStream("test1").pipe(response);
//         //Echo
//         request.pipe(response);

//         while(null!==(chunk=request.read())){
//             console.log(chunk.toString());
//             //chunk.pipe(fs.createWriteStream("test2.txt"));
//         }
//     })
//     // response.writeHead(200);
//     // response.write("Hello from NodeJS!");
//     // response.end();
// })
// server.listen(port, function(err){
//     if(err){
//         console.log(err);
//         process.exit(1);
//     }else{
//        // open("http://localhost:"+port);
//     }
// });
// console.log("Server running on Port : " + port)



// var fs = require('fs');
// // var readStream = fs.createReadStream("test1.txt");
// // var writeStream = fs.createWriteStream("test2.txt");
// // readStream.pipe(writeStream);

// fs.readFile('test1.txt',function(err, data){
//     console.log(data.toString());
// });

// var reading = fs.readFileSync("test2.txt");
// console.log(reading.toString());

// var str = "Sample String";
// var buffer = new Buffer(str, 'utf-8');
// console.log(buffer);
// var roundTrip = buffer.toString('utf-8');
// console.log(roundTrip);


//console.log(__filename, __dirname);

// process.on('exit', function(err){
//     console.log("Existing...")
// })
// process.on('uncaughtException', function(){
//     console.log("ERROR");
//     process.exit(1);
// })
// nonExist();

// setTimeout(function(){
//     process.exit(0);
// }, 5000);
// console.log("About to exist in 5 seconds ...")
// process.on("SIGINT", function(){
//     console.log("Interruption occured!")
// })

//console.log(global);


//Events

// var EventEmitter = require('events').EventEmitter;
// var emitter = new EventEmitter();
// on : handle/subscribe the event
// emit : trigger the event
// Multiple Subscription



// emitter.on('newListener', function(eventName , listenerFunction){
//     console.log(eventName + " added listener "+ listenerFunction.name);
// })

// emitter.on('removeListener', function(eventName , listenerFunction){
//     console.log(eventName + " removed listener "+ listenerFunction.name);
// });

// emitter.on('foo', function (todo={}) {
//     console.log("Second Handler with " + todo.status);
//     emitter.removeListener('foo', handler1);
// })

// function handler1(){
//     console.log("Handler Called");
// }
// emitter.on('foo', handler1);
// //emitter.on('bar', handler1);

// emitter.emit('foo', {status : "done"});
// emitter.emit('foo');
// //emitter.emit('bar');


//Memory Leak Issue

// var listenerCount = 0;
// emitter.setMaxListeners(30);
// function someFunc(){
    
//   emitter.on('foo', function(){
//     listenerCount++;
//     console.log(listenerCount);
//     })
// }
// for(var i=0 ; i<20; i++){
//     someFunc();
// }
// emitter.emit('foo');



// var EventEmitter = require('events').EventEmitter;
// var emitter = new EventEmitter();
// var inherits = require('util').inherits;
// function Foo(){
//     EventEmitter.call(this);
// }
// inherits(Foo, EventEmitter);
// Foo.prototype.connect = function(){
//     this.emit('connected');
// }
// var foo = new Foo();
// foo.on('connected', function(){
//     console.log('Connected Now!');
// })

// foo.connect();


// var EventEmitter = require('events').EventEmitter;
// var stream = require('stream');
// console.log(new stream.Stream() instanceof EventEmitter);   //true
// console.log(new stream.Readable({}) instanceof stream.Stream); //true


//TRANSFORM
// var fs = require('fs');
// var gzip = require('zlib').createGzip;
// var rs = fs.createReadStream("test1.txt");
// var ws = fs.createWriteStream("test2.txt");
// rs.pipe(gzip()).pipe(ws);

//READABLE
// var Readable = require('stream').Readable;
// var inherits = require('util').inherits;
// function Counter(){
//     Readable.call(this);
//     this.index = 0;
//     this.max = 100;
// }
// inherits(Counter, Readable);

// Counter.prototype._read = function(){
//     var i = this.index++;
//     if(i > this.max){
//         this.push(null);
//     }else{
//         var str = " " + i;
//         this.push(str);
//     }
// }
// var counter = new Counter();
// counter.pipe(process.stdout);


//WRITABLE
var Writable = require('stream').Writable;
var fs = require('fs');
var inherits = require('util').inherits;
function Logger(){
    Writable.call(this);
}
inherits(Logger, Writable);
Logger.prototype._write = function(chunk){
    console.log(chunk.toString());
}
var logger = new Logger();
fs.createReadStream('test1.txt').pipe(logger);