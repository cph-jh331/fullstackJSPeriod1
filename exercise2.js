
// 2) Implement user defined functions that take callbacks as an argument
// Now, assume the array did not offer these two methods. Then we would have 
// to implement them by ourself. 

// Implement a function: myFilter(array, callback)that takes an array as the 
// first argument, and a callback as the second and returns a new (filtered) 
// array according to the code provided in the callback (that is with the same 
// behaviour as the original filter method).

var names = ["Jens", "Frans", "Jan", "Harald", "Bo"];

function myFilter(array, callback) {
    return callback(array);
}

function callbackForFilter(arr) {
    var resultArray = []
    arr.forEach(element => {
        if (element.length <= 3) {
            resultArray.push(element);
        }
    });
    return resultArray;
}

console.log(myFilter(names, callbackForFilter));

// Test the method with the same array and callback as in the example with the 
// original filter method.

// Implement a function: myMap(array, callback)that, provided an array and a 
// callback, provides the same functionality as calling the existing map method 
// on an array.

function myMap(array, callback) {
    return callback(array);
}

function callbackForMap(arr) {
    var resultArray = [];
    arr.forEach(element => {
        resultArray.push(element.toLocaleUpperCase());
    });
    return resultArray;
}

// Test the method with the same array and callback as in the example with the
// original map method.
console.log(myMap(names, callbackForMap));