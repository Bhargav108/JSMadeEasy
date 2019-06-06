/*
A function is a higher order function if it takes a function as a parameter, or returns a function as its result. Both of these requirements rely on functions being first-class objects in a language.
*/

// forEach
var colors = ['red', 'green', 'blue'];

function printValue(val) {
  console.log(val)
}

colors.forEach( color => {
  printValue(color);
});
// Also can be written as
// colors.forEach(printValue);

/*
 map

Creates a new array containing the same number of elements, but output elements are created by the provided function. 
It just converts each array element to something else.
*/

var colors = ['red', 'green', 'blue'];
function capitalize(val) {
 return val.toUpperCase();
}
var capitalizedColors = colors.map(capitalize);
console.log(capitalizedColors);

/*
  filter

  Creates a new array containing a subset of the original array. 
  The result has these elements that pass the test implemented by the provided function, 
  which should return true or false.
*/

var values = [1, 60, 34, 30, 20, 5];
function lessThan20(val) {
  return val < 20;
}
var valuesLessThan20 = values.filter(lessThan20);
console.log(valuesLessThan20);

/*
  find

  Finds the first element that passes the test implemented 
  by the provided function, which should return true or false.
*/

var people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
];
function teenager(person) {
  return person.age > 10 && person.age < 20
}
var firstTeenager = people.find(teenager);
console.log('First found teenager:', firstTeenager.name);

/*
  every

  Checks if every element of the array passes the test implemented by the provided function, 
  which should return true or false.
*/
var people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
];
function teenager(person) {
    return person.age > 10 && person.age < 20;
}
var everyoneIsTeenager = people.every(teenager);
console.log('Everyone is teenager: ', everyoneIsTeenager);

/*
  some

  Checks if any element of the array passes the test implemented by the provided function, 
  which should return true or false.
*/
var people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
];
function teenager(person) {
  return person.age > 10 && person.age < 20
}
var thereAreTeenagers = people.some(teenager);
console.log('There are teenagers:', thereAreTeenagers);

/*
  reduce

  Applies a function passed as the first parameter against an accumulator and each element in the array (from left to right), 
  thus reducing it to a single value. The initial value of the accumulator should be provided as the second parameter of the reduce function.
*/
var array = [1, 2, 3, 4];
function sum(acc, value) {
  console.log({acc, value});
  return acc + value
}
function product(acc, value) {
  return acc * value
}
var sumOfArrayElements = array.reduce(sum, 0);
var productOfArrayElements = array.reduce(product, 1);
console.log('Sum of', array, 'is', sumOfArrayElements);
console.log('Product of', array, 'is', productOfArrayElements);