const foo    = { name: 'John Wick',   age: 30, nervous: false };
const bar    = { name: 'Carter',  age: 40, nervous: false };
const baz    = { name: 'Bruce Wayne', age: 50, nervous: true };


'Bad Code '

console.log(foo);
console.log(bar);
console.log(baz);



'Good Code ✅'

// Computed Property Names

console.log('%c My Friends', 'color: orange; font-weight: bold;' )
console.log({ foo, bar, baz });

// Console.table(...)
console.table([foo, bar, baz])

var animals = [
  { kind: 'Horse', name: 'Henry', age: 43 },
  { kind: 'Dog', name: 'Spot', age: 13 },
  { kind: 'Cat', name: ' Mittens', age: 18 },
];
/*
  Let’s say you only want to display a few key columns. You can avoid the step of mapping them into new objects 
  by passing an array containing the desired column names as the second parameter when calling console.table.
*/
console.table(animals, ['name', 'age'])


// // Console.time
console.time('looper')

let i = 0;
while (i < 1000000) { i ++ }

console.timeEnd('looper')

// // Stack Trace Logs

const deleteMe = () => console.trace('bye bye database')

// deleteMe()
// deleteMe()

/*
Writing formatted strings
The other form console.log and friends take is a printf-like formatted string, 
followed by any number of substitutions. The format isn’t as rich as printf, 
but it does support some of the common variants 
like strings with %s, integers with %d or %i, and objects %o and %O.
*/

// Try below code in browser
// for (let i = 0; i < 10; i++) {
//   console.log(
//     "%s I've been called %d times, this is the document body %o",
//     "Hello", i, document.body
//   );
// }

/*
  Grouping information
  Finally, there’s the console.group, which visually groups information together in a collapsible list, 
  increasing the indentation by one per level.
*/

console.group('First group');
console.log('First message');
console.group('A group inside the first group');
console.log('A message inside the group inside the first group'); console.log('Another message inside the group inside the first group');
console.groupEnd();
console.log('Second message'); console.groupEnd();