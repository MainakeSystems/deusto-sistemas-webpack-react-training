//Class ES5
var Client = function(id, name) {
    this.id = id;
    this.name = name;
};

Client.prototype.getId = function() {
    return this.id;
};

var myClient = new Client(3, 'pakito');

console.log("Client Id:", myClient.getId());

//ES 2015
class CustomerEs6 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    getId() {
        return this.id;
    }
}

//TypeScript
class CustomerEs6 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    getId() {
        return this.id;
    }
}