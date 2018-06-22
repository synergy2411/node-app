function List(){
    this.items = [];
}

List.prototype.add = function(){
    this.items.push("task 1");
}

List.prototype.removeItem = function(){
    this.items = [];
}

module.exports = List;