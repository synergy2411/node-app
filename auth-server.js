var app = require('express')();
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended :true}));

app.get('/api', function(req,res){
    res.json({
        status : "Public API"
    })
});

function ensureToken(req, res, next){
    var bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader != 'undefined'){
        var bearer = bearerHeader.split(' ');
        var token = bearer[1];
        req.token = token;
        next();
    }else{
        res.send(403, {status : "FORBIDDEN"})
    }
}
app.get("/api/protected", ensureToken, function(req, res){
    jwt.verify(req.token, 'my_secret_key', function(err, data){
        if(err) throw err;
        console.log(data);
        res.json({
            status : "Here comes the data"
        })
    })
})
app.post('/api/login', function(req, res){
    var user = req.body;
    console.log("Request Body : " , req.body);
    var token = jwt.sign({user : user}, 'my_secret_key');
    res.json({
        token : token
    })
})

app.listen(9090, function(){console.log("Server started...")})