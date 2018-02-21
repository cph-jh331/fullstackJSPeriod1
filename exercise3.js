// 3) Using the Prototype property to add new functionality to existing objects
// The problem with our two user defined functions above (myFilter and myMap) 
// is that they are not really attached to the Array Object. They are just 
// functions, where we have to pass in both the array and the callback.

// Create a new version of the two functions (without the array argument) which 
// you should add to the Array prototype property so they can be called on any 
// array as sketched below:

var names = ["Lars", "Peter", "Jan", "Bo"];
// var newArray = names.myFilter(function(name) {…});

Array.prototype.myFilter = function (callback) {
    var resultArray = [];
    this.forEach(element => {
        if (callback(element) !== false) {
            resultArray.push(element);
        }
    });
    return resultArray;
}

Array.prototype.myMap = function (callback) {
    var resultArray = [];
    this.forEach(element => {
        resultArray.push(callback(element));
    });
    return resultArray;
}

console.log(names.myFilter(name => name.length <= 3));
console.log(names.myMap(name => name.toLocaleUpperCase()));