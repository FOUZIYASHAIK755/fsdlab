// Define the Animal class
class Animal {
    speak() {
        console.log("The animal makes a sound.");
    }
}

// Define the Dog subclass that extends Animal
class Dog extends Animal {
    speak() {
        console.log("Woof!");
    }
}

// Instantiate the Animal class
const genericAnimal = new Animal();
genericAnimal.speak(); // Output: The animal makes a sound.

// Instantiate the Dog class
const myDog = new Dog();
myDog.speak(); // Output: Woof!
