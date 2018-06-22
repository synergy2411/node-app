// var assert = require('assert');
// var List = require('./list');

// describe("Test Suite 1",function(){

//     var list = new List();
   
//     it("Test Spec 1", function(){
//         list.add();     //items[0]
//         assert.equal(list.items.length, 1, "List lenght should be 1 ");
//     });
//     it("Test Spec 2", function(){
//         list.removeItem();
//         assert.equal(list.items.length, 1, "Should be Zero");
//     });
//     //it("Test Spec 3", function(){});
// })

// function simulateAsync(cb){
//     setTimeout(function(){
//         cb(new Error("Something bad happened!"))
//     }, 500);
// }

// describe("Test Suit 2", function(){
//     it("Spec 1", function(done){
//         simulateAsync(function(err){
//             if(err) throw err;
//             done();
//         })
//     })
// })

// var Q = require('q');
// describe("Test Suite 3", function(){
//     it("Should Pass", function(){
//         return Q.resolve('Pass');
//     });
//     it("Should Fail", function(){
//         return Q.reject(new Error("Rejected"));
//     });
// })

var assert = require('chai').assert;
var expect = require('chai').expect;

var user = {friends : ["foo","bar","bam"]};

describe("Desc 1", ()=>{
    it("New Test 1", ()=>{
        expect(user).to.have.property('friends').with.length(3);
    });
    it("New Test 2", ()=>{
        expect(user).property('friends').length(2);        
    });
    it("New Test 3",()=>{
        expect("My Awesome App").to.contain("Awesome");
    })
})

