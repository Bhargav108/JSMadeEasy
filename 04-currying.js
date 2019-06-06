/*
  Currying is the mean to transform a function of arity n to n functions of arity 1. So, this is the theory. 
  It simply means that currying allows you to not specify all arguments when you call a function.
*/

// Simple Function
const add = function (a, b) {
  return a + b;
}
// Above function also can be written as
// const add = (a, b) => a + b

console.log('Simple function - ', add(1, 2)); //should return 3

// Currying function 
const curryAdd = function(a) {
  return function(b) {
    return a + b;
  }
}

// Above function can also be written as
// const add = a => b => a + b

const curryValue = curryAdd(3);
console.log('curryValue', curryValue(9));

console.log('Curry function output - ', curryAdd(3)(5));

/*
  Currying is possible in JavaScript because functions are first-class citizen. 
  It means that functions are like any other values. 
  They can be assigned to variables, passed as argument to other functions and returned by functions.
*/

// USAGE

/*
  Currying gives you the opportunity to partially configure a function and then, it is the mean to create reusable functions.
  Let's take another example. Suppose I have a collection like this:
*/

const movies = [
  {
    "id": 1,
    "name": "Matrix",
    "year": 2000
  },
  {
    "id": 2,
    "name": "Star Wars",
    "year": 1995
  },
  {
    "id": 3,
    "name": "The wolf of Wall Street",
    "year": 2014
  }
];


/*
  Now, suppose we want to extract the ids of movies collection. 
  We could simply use the map function to iterate over the collection:
*/

const movieIds = movies.map(function (movie){
  return movie.id;
});

// Above function can be written as 
// const movieIds = movies.map( movie => movie.id);
console.log('Movie Ids - ', movieIds);

// We also have another collection

const series = [
  {
    "id": 4,
    "name": "South Park"
  },
  {
    "id": 5,
    "name": "The Simpsons"
  },
  {
    "id": 6,
    "name": "The Big Bang Theory"
  }
];
const seriesIds = series.map(function (serie){
  return serie.id;
});

//Above function can be written as 
// const movieIds = movies.map( movie => movie.id);
console.log('Movie Ids - ', seriesIds);

/*
  The callbacks of map are strictly the same, but we operated on two different collections.
  In this case, currying can be the solution.
  Let's make a function call get that should extract a property from an object:
*/

const get = function(property) {
  return function (object) {
    return object[property];
  }
}

// Above function also can be written as 
// const get = property => object => object[property];

/*
  Now from this function I can create another function, called getId that is just a partial configuration of the get function:
*/
const getValue = get('id');

// At this step, getId is still a function and this is great because we are now able to use it inside our map calls:

console.log('Curried movies - ', movies.map( (movie) => {
  return getValue(movie);
}));
console.log('Curried series - ', series.map(getValue));

// Now if we want to get the names of movies

const getName = get('name');
console.log('Curried movies names - ', movies.map(getName));
