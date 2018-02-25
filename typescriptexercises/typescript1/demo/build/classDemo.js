"use strict";
var Person = /** @class */ (function () {
    function Person(name, email) {
        this.email = email;
        this.id = Person.nextId++;
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setName", {
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Person.nextId = 100;
    return Person;
}());
var p3 = new Person("Bob", "emial@emal.dk");
console.log(p3.id + ", " + p3.getName);
p3 = new Person("Frans", "email@email.dk");
console.log(p3.id + ", " + p3.getName);
//# sourceMappingURL=c:/Users/bloch/Desktop/javascriptfullstack/typescript/demo/build/classDemo.js.map