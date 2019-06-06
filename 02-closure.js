/*
  Whenever a function is invoked, a new scope is created for that call. 
  The local variable declared inside the function belong to that scope – they can only be accessed from that function -. 
*/

function buildName(name) { 
  var greeting = "Hello, " + name + "!"; 
  //  var greeting = `Hello, ${name}!`;
  var sayName = function() {
      var welcome = greeting + " Welcome!";
      console.log(greeting); 
  };
  return sayName; 
}

var sayMyName = buildName("John");
sayMyName();

// Through closure, you can achieve real private data in Javascript. 

function initializeData() {
  var myVar = 1; 
  return { 
      getVar: function() {
        return myVar;
      },
      setVar: function(v) {
        myVar = v;
      }
  };
}

obj = initializeData();

console.log(obj.getVar()); // 1

obj.setVar(2);
console.log(obj.getVar()); // 2

obj.setVar("Some awsome text message");
console.log(obj.getVar()); // Some awsome text message

/*
  Another extremely important thing to understand is that a closure is created at every function call. 
  Whenever I’m using the closure, it will reference the same outer scope. 
  If any variable is change in the outer scope, than the change will be visible in the next call as well.
*/

function buildCounter(i) { 
  var counter = i;
  var displayCounter = function() {
      console.log(counter);
      counter++;
  };
  return displayCounter; 
}

var myCounter = buildCounter(1);
myCounter(); // 1
myCounter(); // 2
myCounter(); // 3

// new closure - new outer scope - new countor variable
var myOtherCounter = buildCounter(10);
myOtherCounter(); // 10 
myOtherCounter(); // 11

// myCounter was not affected 
myCounter(); // 4
