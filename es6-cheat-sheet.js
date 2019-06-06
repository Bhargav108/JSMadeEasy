/*
  ES6 refers to version 6 of the ECMA Script programming language. ECMA Script is the standardized name for JavaScript, 
  and version 6 is the next version after version 5, which was released in 2011. 
  It is a major enhancement to the JavaScript language, and adds many more features intended to make 
  large-scale software development easier.

  ECMAScript, or ES6, was published in June 2015. It was subsequently renamed to ECMAScript 2015.
  Web browser support for the full language is not yet complete, though major portions are supported. 
  Major web browsers support some features of ES6.
*/

// let scope
let text = "lorem";
if (true) {
  let text = "ipsum";
  console.log(text);
}
console.log(text);

// const
const MIN_VALUE = 10;
// MIN_VALUE = 5 //Throws error while assigning

// Multi line string console
console.log(`
  The following text is
  multiline message with 
  random text.
`);

// Template String
const name = "Tony Stark";
const character = "Iron Man";
console.log(`${name} is ${character}`);

// Arrow Function
var product = (a,b) => a*b;
console.log(product(11,11));

// Default parameters
function getUserDetails ({name = "John Doe", company="Acme Corporation", place=" Ruritania"}) {
  console.log(`${name} is working in ${company} from ${place}`)
}
getUserDetails({name: "Rahul", company: "Secure Infomatics"});
getUserDetails({name: "Abhishek"});

//Destructuring
// DON'T
let arr = [1, 2, 3];
var a = arr[0];
var b = arr[1];
var c = arr[2];
console.log(a, b, c);

// DO
var [x, y, z] = [4, 5, 6];
console.log(x, y, z);

var organization = {
  cohort: "Engineering",
  place: "Ruritania",
  strength: 500,
}

let { cohort, place, strength } = organization;
console.log(cohort, place, strength);

// For nested objects

var details = 
{"isbn": "123-456-222",  
  "author": 
    {
      "lastname": "Doe",
      "firstname": "Jane"
    },
  "editor": 
    {
      "lastname": "John",
      "firstname": "Doe"
    },
  "title": "The Ultimate Database Study Guide",  
  "category": ["Non-Fiction", "Technology"]
}

let {isbn, author: {lastname , firstname }, title} = details;
console.log(isbn, lastname, title);

// Spread Operator

let cities = ['San Francisco', 'Los Angeles'];
let places = ['Miami', ...cities, 'Chicago']; 
console.log(places);

let object = {a: '1', b:'2', c: '3'};
let anotherObject = {d:'4', e:'5'};
console.log({...object, ...anotherObject});


const obj = {
  item: "temp",
  nextItem: "tempNext",
  limit: 0,
  offset: 10,
};
// Object.entries
console.log(Object.entries(obj));
// assign()
const newObject = Object.assign({}, obj);
console.log(newObject);

// More yet to come --

