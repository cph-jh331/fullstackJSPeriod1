// 4) Getting really comfortable with filter and map

// a) Use map() to create to create the <li>’s for an unordered list 
// and eventually a string like below (use join() to get the string 
// of <li>’s):
// <ul>
//   <li>Lars</li>
//   <li>Peter</li>
//   <li>Jan</li>
//   <li>Bo</li>
// <ul>

var onlyNames = ['Lars', 'Peter', 'Jan', 'Bo'];
var ulNames = '<ul>' + onlyNames.map(name => '<li>' + name + '</li>').join('') + '</ul>';
//console.log(ulNames);

// b) Use map()+(join + ..) to create to create a string, representing a 
// two column table, for the data given below:
var names = [
    { name: "Lars", phone: "1234567" },
    { name: "Peter", phone: "675843" },
    { name: "Jan", phone: "98547" },
    { name: "Bo", phone: "79345" }
];

var tableNames = '<table><thead><tr><th>Name</th><th>Phone</th></thead><tbody>' +
    names.map(element => '<tr><td>' + element.name + '</td><td>' + element.phone + '</td></tr>').join('')
    + '</tbody></table>';

// c) Create a single html-file and test the two examples given above.

// Hint: add a single div with an id=names, and use DOM-manipulation 
// (document.getElementById.innerHTML = theString) to add the ul or table.

document.getElementById('names').innerHTML = tableNames;

// d) Add a button with a click-handler and use the filter method to find 
// only names with a length >3. Update the ul and/or the table to represent 
// the filtered data.

var hasClicked = false;
function filterNames() {
    if (hasClicked === false) {
        var result = '<table><thead><tr><th>Name</th><th>Phone</th></thead><tbody>' +
            names
                .filter(person => person.name.length > 3)
                .map(person => '<tr><td>' + person.name + '</td><td>' + person.phone + '</td></tr>')
                .join('')
            + '</tbody></table>';
        document.getElementById('names').innerHTML = result;
        hasClicked = true;
    } else {
        document.getElementById('names').innerHTML = tableNames;
        hasClicked = false;
    }
}
document.getElementById('filterButton').addEventListener('click', filterNames);