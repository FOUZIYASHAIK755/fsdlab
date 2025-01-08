const symbol1 = Symbol('cvr');
const symbol2 = Symbol('cvr');
const obj = {
  [symbol1]: 'Value for symbol1',
  [symbol2]: 'Value for symbol2'
};
console.log(obj[symbol1]);  
console.log(obj[symbol2]);  
console.log(symbol1 === symbol2);  
