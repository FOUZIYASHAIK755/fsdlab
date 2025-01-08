const symbol1 = Symbol('uniqueSymbol');
const symbol2 = Symbol('uniqueSymbol');
// Even with the same description, they are different symbols
console.log(symbol1 === symbol2);  

const globalSymbol1 = Symbol.for('sharedSymbol');
const globalSymbol2 = Symbol.for('sharedSymbol');

// These are the same symbol because they share the same key
console.log(globalSymbol1 === globalSymbol2); 

