// Hoisting example with var
console.log(varNumber); 
var varNumber = 10;
console.log(varNumber); 

let letString = "Hello, World!";
console.log(letString); 
const constBoolean = true;
console.log(constBoolean); 
// Scope example
function scopeExample() {
    if (true) {
        var varScope = "I am var";
        let letScope = "I am let";
        const constScope = "I am const";
    }
    console.log(varScope); 
}
scopeExample();

// Reassignment example
var varReassign = 5;
console.log(varReassign); 
varReassign = 15;
console.log(varReassign); 

let letReassign = "Initial Value";
console.log(letReassign); 
letReassign = "New Value";
console.log(letReassign); 
const constReassign = 100;
console.log(constReassign); 