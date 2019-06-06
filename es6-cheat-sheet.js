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
function userDetail ({name = "John Doe", company="Acme Corporation", place=" Ruritania"}) {
  console.log(`${name} is working in ${company} from ${place}`)
}
userDetail({name: "Rahul", company: "Secure Infomatics"});
userDetail({name: "Abhishek"});

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

