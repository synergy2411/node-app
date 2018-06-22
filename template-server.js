var express = require('express');
var app = express();
var ejs = require('ejs');

app.set("view engine", 'ejs');
var title = "My Awesome App";
var todos = [{
        label : "Some Work",
        status : "done"
},{
    label : "Neww Work",
    status : "pending"
}]

app.get("/", function(req, res){
    res.render('index.ejs', {
        title : title, 
        todos : todos
    });
})

app.listen(9090, function(){
    console.log("Server started at Port : 9090");
})