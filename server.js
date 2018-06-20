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

console.log(global);

