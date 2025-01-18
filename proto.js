// Constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}
// Add a method to the prototype
Car.prototype.getDetails = function () {
    return `Make: ${this.make}, Model: ${this.model}`;
};
// Create an object using the constructor
const car1 = new Car("Toyota", "Corolla");
// Access the prototype of car1
console.log(car1.__proto__); // Points to Car.prototype
// Access the prototype's method
console.log(car1.getDetails()); // Output: Make: Toyota, Model: Corolla
// Demonstrating prototype
console.log(Car.prototype); // The shared prototype object
console.log(car1.__proto__ === Car.prototype); // true
// Add another method to the prototype
Car.prototype.getMake = function () {
    return this.make;
};
// All objects created with the Car constructor have access to this method
console.log(car1.getMake()); // Output: Toyota
// prototype: Used to define methods and properties shared by all objects created by a constructor.
//     __proto__: Points to the object's prototype and is part of the prototype chain.
