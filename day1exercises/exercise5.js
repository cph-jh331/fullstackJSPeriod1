// filter, map and reduce
// In most literature (definitely not only JavaScript) you will 
// see map and filter explained together with the reduce function 
// (try and google “map filter and reduce), so obviously, this is
// a method we need to learn.

// reduce is used to reduce an array into a single item (a number, 
// string, object, etc). This is a very common problem in all 
// languages, for some specific problems, so common that the array 
// actually has a specific “reduce” function called join, which can 
// reduce an array into a string separated by whatever we choose.

var all = ["Lars", "Peter", "Jan", "Bo"];

// a) Use join to create a single string from all, with names: 
// comma-, space. and # - separated. What is # separated?

var strJoined = all.join(', ');
console.log(strJoined);

// Now let’s create our own reducer functions (see here for info).
// b) Given this array: 
var numbers = [2, 3, 67, 33];
// Create a reducer function that will return the sum (105) of all values in 
// numbers

//var reducer1 = (accumulator, currentValue) => accumulator + currentValue;
function reducerSum(accumulator, currentValue) {
    // console.log(`= ${accumulator}`);
    // console.log(`+ ${currentValue}`);
    return accumulator + currentValue;
}
console.log(numbers.reduce(reducerSum))

// c)  Given this array:
var members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }
]

// Create a reducer function that will return the average age of all members.
// Hint: The reduce callback takes two additional arguments as sketched below:
// var reducer = function(accumulator, member,index,arr ){
// Index is the current index for which the value (member) are passed in, and 
// arr is the array. Use this to return different values from your reduce-function,
// according to whether you have reached the last element or not.
function reducerAvgNeedMap(accumulator, member, index, arr) {
    if (index !== arr.length - 1) {
        return accumulator + member;
    }
    return (accumulator + member) / arr.length;
}
console.log(members.map(member => member.age).reduce(reducerAvgNeedMap));

// Without map, when doing reduce on anything other than pure numbers in an array, you NEED to provide reduce 
// with some kind of START VALUE for the accumulator.
function reducerAvgNoMap(a, v, i, arr) {
    return (i !== arr.length - 1) ? a + v.age : (a + v.age) / arr.length;
}
// Start value for accumulator in reduce is 0:
console.log(members.reduce(reducerAvgNoMap, 0));

// d) (difficult) Imagine you were to create a system that could count votes 
// for the presidential election in USA.
// Given this array of votes: 
var votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];
// Create a reduce function, that will return a single object like {Clinton: 3, Trump: 4, None: 1 }

// Hints: You can check whether a property exist in a JavaScript, and add new 
// properties as sketched below:
// var a = {}
// if (a["clinton"])
//     console.log("I Will Not Print")
// a["clinton"] = 1;
// console.log("You will see me")
// console.log("Value of clinton " + a["clinton"]);
function reducerVotes(a, v) {
    if (a[v]) {
        a[v]++;
    } else {
        a[v] = 1;
    }
    return a;
}
console.log(votes.reduce(reducerVotes, {}));