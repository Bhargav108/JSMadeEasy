/*
  Hoisting is a JavaScript mechanism where variables and function declarations are moved 
  to the top of their scope before code execution.
  This means that no matter where functions and variables are declared, 
  they are moved to the top of their scope regardless of whether their scope is global or local.

  In JavaScript, an undeclared variable is assigned the value undefined at execution 
  and is also of type undefined.
  A ReferenceError is thrown when trying to access a previously undeclared variable.
*/


console.log(definedLater);
var definedLater;
definedLater = 'I am defined!'
console.log(definedLater)


console.log(definedSimulateneously);
var definedSimulateneously = 'I am defined simultaneously!'
console.log(definedSimulateneously)


doSomethingElse();
function doSomethingElse(){
  console.log('I did it in something else!');
}

/*
  Uncomment below function to see the error
*/
// functionVar(); // Uncaught TypeError: functionVar is not a function
// var functionVar = function(){
//   console.log('I did it!');
// }

// IN DETAIL

function hoist() {
  a = 20;
  var b = 100;
}

hoist();

console.log(a); 
/* 
Accessible as a global variable outside hoist() function
Output: 20
*/

// Uncomment console to see the result 
// console.log(b); 
/*
Since it was declared, it is confined to the hoist() function scope.
We can't print it out outside the confines of the hoist() function.
Output: ReferenceError: b is not defined
*/

/*
  The variable's scope is bound to the block in which it is declared and not the function in which it is declared.
*/

/*
  Uncomment to see the error
*/
// console.log(hoist); // Output: ReferenceError: hoist is not defined ...
// let hoist = 'The variable has been hoisted.';

/*
  However, we still have to be careful here. An implementation like the following will result in an ouput of undefined 
  instead of a Reference error.
*/

let secondHoist;

console.log(secondHoist); // Output: undefined
secondHoist = 'Hoisted'

/*
The const keyword was introduced in es6 to allow immutable variables. That is, variables whose value cannot be modified once assigned.
With const, just as with let, the variable is hoisted to the top of the block.
Let's see what happens if we try to reassign the value attached to a const variable.
*/

const PI = 3.142;

// Shows error in assigning to constant variable
// PI = 22/7; // Let's reassign the value of PI

// console.log(PI); // Output: TypeError: Assignment to constant variable.

// HOISTING FUNCTIONS

/*
  JavaScript functions can be loosely classified as the following:
  1. Function declarations
  2. Function expressions
*/

// Function declaration
hoisted(); // Output: "This function has been hoisted."

function hoisted() {
  console.log('This function has been hoisted.');
};

// Function expressions

// Uncomment below to  see the error
// expression(); //Output: "TypeError: expression is not a function

var expression = function() {
  console.log('Will this work?');
};

// Combination of both function declaration and function expression

// Uncomment below to see the error
// expression(); // Ouput: TypeError: expression is not a function

var expression = function hoisting() {
  console.log('Will this work?');
};