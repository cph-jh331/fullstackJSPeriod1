"use strict";
function personLogger(person) {
    // person.id = 123; constant readonly cannot be changed.
    var str = "\n    ******************************\n    ID: " + person.id + "\n    Name: " + person.first + " " + person.lastNme + "\n    Phone: " + person.landLine + "\n    ******************************\n    ";
    console.log(str);
}
var p1 = {
    id: 34,
    first: 'bobby',
    lastNme: 'frans',
    email: 'email@email.com',
    landLine: "+45 33445566"
};
personLogger(p1);
//# sourceMappingURL=c:/Users/bloch/Desktop/javascriptfullstack/typescript/demo/build/interfaceDemo.js.map