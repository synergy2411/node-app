var mongodb = require('mongodb');
var client = mongodb.MongoClient;
var _db;

module.exports.connect = function(){
    client.connect("mongodb://localhost:27017", 
        function(err, database){
        if(err){
            console.log(err);
            process.exit(1);
        }
        console.log("Mongo Connected!");
        _db = database.db('node_db');
    })
}

module.exports.getUsers = function(){
    return _db.collection('users');
}

module.exports.findUser = function(key,cb){
    _db.collection('users').find(key).toArray( 
        function(err, status){
            if(err){
                console.log("Can't Find User")
            }
            console.log(status.length);
            if(status.length>0){
                cb(true);
            }else{
                cb(false);
            }
        });
}


module.exports.insertUser = function(data){
    return new Promise(function(resolve, reject){
        _db.collection('user').insert(data, 
            function(err, status){
            if (err){
                reject(false);
            }
            console.log(status);
            if(status.result.ok){
                resolve(true)
            }else{
                reject(false);
            }
        })    
    })
    
}