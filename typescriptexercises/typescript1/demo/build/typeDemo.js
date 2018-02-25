"use strict";
var isDone = true;
isDone = false;
var count;
count = 34;
var user = "Kurt Jensen";
var msg = "**************\n HELLO " + user + " welcome today!\n**************\n";
console.log(msg);
var numbers = [1, 2, 3, 4, 5, 6];
var numbers2 = [2, 4, 6, 8, 10];
numbers2.push(300);
var numberString = 1;
numberString = "5";
function logInfo(info) {
    console.log(info);
}
//Enums:
var skill = 0;
//numeric enums:
var skills;
(function (skills) {
    skills[skills["Low"] = 0] = "Low";
    skills[skills["Medium"] = 1] = "Medium";
    skills[skills["High"] = 2] = "High";
    skills[skills["Expert"] = 3] = "Expert";
})(skills || (skills = {}));
if (skill === skills.Low) {
    //do something.
}
if (skill === skills.Expert) {
    //stop going to class.
}
//String enums:
var color;
(function (color) {
    color["orange"] = "orange";
    color["pink"] = "pink";
    color["golden"] = "golden";
})(color || (color = {}));
//# sourceMappingURL=c:/Users/bloch/Desktop/javascriptfullstack/typescript/demo/build/typeDemo.js.map