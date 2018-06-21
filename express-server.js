// var express = require('express');
// var app = express();
// var path = require('path');
// var bodyParser = require('body-parser');

// app.use(express.static(path.join(__dirname,"/public")));
// app.use(bodyParser.urlencoded({extended : true}));

// app.get("/", function(req, res){
//     //res.send(200, 'Express is running...');
//     //res.send({status : "Found"});
//     res.sendFile(__dirname+'/public/index.html');
// })
// app.get("/login", function(req, res){
//     if(req.query)
//     console.log("Username : " + req.query.username + 
//             "\nPassword : " + req.query.password);
//     res.send("Data Received!");
// })
// app.get("/user/:id", function(req, res){
//     console.log(req.params['id']);
//     res.send("Route Parameter received!");
// })
// app.post("/login", function(req, res){
//     console.log('API Hit!');
//     console.log("Request body : ", req.body);
//     res.send({status : "API Hit"});
// })
// app.listen(9090, function(err){
//     if(err){
//         console.log("ERROR");
//     }else{
//         console.log("Express Started at Port : 9090")
//     }
// })

//curl http://localhost:9090/todo -X GET
//curl http://localhost:9090/todo -X POST -d "New Work"
//curl http://localhost:9090/todo/0 -X GET
//curl http://localhost:9090/todo -X PUT -d "Replaced Existing Work" 
//curl http://localhost:9090/todo -X DELETE 

//Express Router
// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended : true}));

// var router = express.Router();
// var items = [];

// router.route("/")
//     .get(function(req, res){
//         res.send({
//             status : "Found",
//             items : items
//         })
//     })
//     .post(function(req, res){
//         items.push(req.body);
//         res.send({
//             status : "Added New Item",
//             item_id : items.length - 1
//         })
//     })
//     .put(function(req, res){
//         items = req.body;
//         res.send({
//             status : "Items replaced",
//             items : items
//         })
//     })
//     .delete(function(req, res){
//         items = [];
//         res.send({
//             status : "Items Cleared!"
//         })
//     })
// router.route("/:id")
//     .get(function(req, res){
//         var id = req.params['id'];
//         if(id && items[Number(id)]){
//             res.send({
//                 status : "FOUND",
//                 item : items[Number(id)]
//             })
//         }else{
//             res.send({
//                 status : "NOT FOUND"
//             })
//         }
//     })
//     .all(function(req, res){
//         res.send(501, {status :"NOT Implemented"});
//     })

// app.use('/todo', router);
// app.listen(9090, function(){
//     console.log("Express Router working on Port : 9090");
// })

//COOKIES
// var express = require('express');
// var cookieParser = require("cookie-parser");
// var app = express()
//     .use(cookieParser())
//     .use("/toggle",function(req, res, next){
//         if(req.cookies.name){
//             res.clearCookie('name');
//             res.send("Cookie deleted! Was " + req.cookies.name);
//         }else{
//             res.cookie("name", "Foo",{
//                 // maxAge: 900000,
//                 // httpOnly : true,
//                 // signed : true
//             });
//             res.send("Cookie Created!");
//         }
//     });
// app.listen(9090, function(){console.log("Server Started...")});


//COOKIES SESSION

var express = require('express');
var cookieSession = require("cookie-session");
var app = express()
    .use(cookieSession({
        keys : ["The Secret Key"]
    }))
    .use("/home", function(req, res){
        if(req.session.views){
            req.session.views++
        }else{
            req.session.views = 1;
        }
        res.send('Total Views : '+ req.session.views);
    })
    .use('/reset', function(req, res){
        delete req.session.views;
        res.send("Views Cleared!")
    })
    .listen(9090, function(){
        console.log("Server run on Port 9090...")
    })