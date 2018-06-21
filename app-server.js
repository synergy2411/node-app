var mongoUtil = require('./mongoUtil');
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname+"/public"));

mongoUtil.connect();

app.get("/", function(req, res){
    res.sendFile(__dirname+"/public/index.html");
})
app.post('/login', function(req, res){
    if(req.body){
        var username = req.body.username;
        var password = req.body.password;
        var key = {
            "username" : req.body.username
        }

        mongoUtil.updateUser(key, {"password" : "xyz@123"})
            .then(response=>{
                if(repsonse){
                    res.send({status : "User record Updated"})
                }
            })



        //DELETE USER DOCUMENT
        // mongoUtil.deleteUser(key)
        //     .then(function(response){
        //         if(response){
        //             res.send({status : "DELETED"});
        //         }else{
        //             res.send({status : "User does NOT exist"});
        //         }
        //     })
        


        //GET SINGLE USER
        //mongoUtil.findUser(key,authUser)

        //CREATE NEW USER
        // mongoUtil.insertUser(key)
        //     .then(function(response){
        //     if(response){
        //         res.redirect("/register");
        //     }
        //     else{
        //         res.redirect("/");
        //     }
        // });

        //GETTING ALL USERS
        // var users = mongoUtil.getUsers();
        // users.find().toArray(function(err, docs){
        //     console.log(docs);
        // })
    }
   // res.send({status : "API Hit"})
   function authUser(flag){
        if(flag){
            res.redirect("/auth");
        }else{
            res.redirect("/");
        }
    }
})

app.get("/auth", function(req, res){
    res.send({status : "Authenticated"});
})
app.get("/register", function(req, res){
    res.send({status : "User registered"});
})
app.listen(9090, function(){
    console.log("Server running on Port : 9090");
})