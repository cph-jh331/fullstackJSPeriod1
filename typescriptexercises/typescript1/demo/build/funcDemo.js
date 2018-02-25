"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(fName, lName, role) {
    if (role === void 0) { role = 'Stripper'; }
    console.log("\n    Hello " + fName + " " + lName + "!\n    Your role is: " + role + "\n    ");
}
// sayHello("Bob", "Frandsen", "Teacher");
// sayHello("Hanne", "Hansen");
var Person = /** @class */ (function () {
    function Person(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    Person.prototype.sayHelloEventually = function () {
        var self = this; //here is the this the classes this...
        setTimeout(function () {
            // this.fName, this points to the function, which does not have
            // have an fName 
            // so you should use self.fName;           
            // console.log(`Hi ${this.fName}`);
            console.log("Hi " + self.fName);
        });
    };
    Person.prototype.sayHelloEvt2 = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Hi " + _this.fName);
        });
    };
    return Person;
}());
var p = new Person("Kurt", "Jensen");
p.sayHelloEvt2();
//# sourceMappingURL=c:/Users/bloch/Desktop/javascriptfullstack/typescript/demo/build/funcDemo.js.map