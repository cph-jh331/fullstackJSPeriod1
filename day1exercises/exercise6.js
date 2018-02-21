// Hosting  (Slides)
// READ: https://www.w3schools.com/js/js_hoisting.asp 

// Team up with another member of the class. Read about hoisting 
// (use literature suggested for period-1) and implement at least 
// two examples (individually) to illustrate that:

// Function declarations are completely hoisted

function frans() {
    bob();
    return 'jens';
}
console.log(frans());
function bob() {
    console.log('sdf')
}

// var declarations are also hoisted, but not assignments made 
// with them
var x = 6;
var y;
console.log(`x: ${x}, y: ${y}`);
y = 4; //init/assignment is not hoisted.

// Explain to each other (as if it was the exam):
// What hoisting is
// A design rule we could follow, now we know about hoisting
// almost always declare variables at the top of the scope. or use "use strict"
// which yells at you, if you have not declared your variable before using it.