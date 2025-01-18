// Create a Person object
const person = {
    name: "John Doe",
    age: 25,

    // Method to print a greeting message
    greet: function() {
        console.log(`Hello, ${this.name}!`);
    },

    // Property to check if the person is an adult
    get isAdult() {
        return this.age >= 18;
    }
};

// Example usage
console.log("Person details:");
console.log("Name:", person.name);
console.log("Age:", person.age);
person.greet(); // Prints the greeting message
console.log("Is adult:", person.isAdult); // Checks if the person is an adult
