// // toUpperCase()
// var name = 'nafis';
// name = name.toUpperCase();
// name = name.toLowerCase();
// console.log(name);

// to take input and conver in upperCase

// 1. Create a var to store the name the user enteers
var name = prompt('What is your name ? ');

// 2.slicing first letter of their name
var firstChar = name.slice(0, 1);

// capitalising first letter
var upperCaseFirstChar = firstChar.toUpperCase();

// rest name
var restOfName = name.slice(1, name.length);

// change rest name to lowerCase
restOfName = restOfName.toLowerCase();

// Capitalised name
var capitalisedName = upperCaseFirstChar + restOfName;

// 3.Use capitalised name to greet them
alert('Hello, ' + capitalisedName);