const colors = ['red', 'green', 'blue', 'yellow'];
const [first, second] = colors;
console.log(first);  
console.log(second); 

const [,secondElement, , fourthElement] = colors;
console.log(secondElement); 
console.log(fourthElement); 