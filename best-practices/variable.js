// NOTE: Don't execute this file as most variables are assumed for explanation.

// DON'T
let aabb;
const ages = arr.map((i) => i.age);

// DO
let daysSinceModification;
var currentData;
const agesOfUsers = users.map((user) => user.age);

// Meaningfull string, avoid extra unnecessary nouns unless it is required

// DON'T
let nameString
let theUsers
let theUsersProfile

// DO
let name
let users
let userInfo

// Make variable as readable

// DON'T
let fName, lName
let cntr

let full = false
if (cart.size > 100) {
  full = true
}

// DO
let firstName, lastName
let counter

const MAX_CART_SIZE = 100
// ...
const isFull = cart.size > MAX_CART_SIZE


// If your class/object name tells you something, don't repeat that in your variable name.

// DON'T
const Car = {
  carMake: "Honda",
  carModel: "Accord",
  carColor: "Blue"
};

function applyPaint(car) {
  car.carColor = "Red";
}

// DO

const car = {
  make: "Honda",
  model: "Accord",
  color: "Blue"
};

function applyPaint(car) {
  car.color = "Red";
}