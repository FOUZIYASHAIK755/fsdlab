const arr=[1,2,3,4,5]
const [, , , , lastelement]=arr;
console.log(lastelement)

//using slice
const [last]=arr.slice(-1)
console.log(last)