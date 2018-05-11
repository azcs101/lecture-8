function Entity(name) {
    this.name = name;
}

Entity.prototype.hello = function() {
    console.log('Entity', this.name);
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype = Object.create(Entity.prototype);

Person.prototype.hello = function() {
    console.log('Person', this.name, this.age);
}


const a = new Entity('A');
const b = new Person('B', 10);

a.hello();
b.hello();