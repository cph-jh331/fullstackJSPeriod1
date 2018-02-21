// 1) Using existing functions that takes a callback as an argument

// Using the filter method:
// Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.). 
var names = ["Jens", "Frans", "Jan", "Harald", "Bo"];

// Use the filter method to create a new array with only names of length <=3.

var filteredNames = names.filter(name => name.length <= 3);
console.log(filteredNames);

// Using the map method:
// Use the names-array created above, and, using its map method, create a new array with all names uppercased.

var upperCasedNames = names.map(name => name.toLocaleUpperCase());
console.log(upperCasedNames);