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
        _db.collection('users').insert(data, 
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

module.exports.deleteUser = function(key){
    return new Promise(function(resolve, reject){
        _db.collection("users").remove(key, 
            function(err, status){
                if(err){
                    console.log(err);
                }
                //console.log(status);
                if(status.result.n>=1){
                    resolve(true);
                }else{
                    reject(false);
                }
            })
    })   
}

module.exports.updateUser = function(key, updatedValue){
    return new Promise(function(resolve, reject){
        _db.collection('users').updateOne(key,
            { $set: updatedValue }, 
            function(err, result) {
                if(err){
                    console.log(err);
                }
            //console.log(result);
            if(result){
                resolve(true);
            }else{
                reject(false);
            }
            
            console.log("Updated the document!");
            });
    })
    
}