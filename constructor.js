// Person constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;

    // Method to describe the person
    this.describe = function() {
        return `Name: ${this.name}, Age: ${this.age}`;
    };
}

// Student constructor function that inherits from Person
function Student(name, age, grade) {
    // Call the parent constructor with the provided name and age
    Person.call(this, name, age);
    this.grade = grade;

    // Method to describe the student studying
    this.study = function() {
        return `${this.name} is studying for grade ${this.grade}.`;
    };
}

// Inherit the prototype from Person
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
const student1 = new Student("John", 30, "A");
const student2 = new Student("Alice", 22, "B");
console.log(student1.describe()); 
console.log(student1.study()); 
console.log(student2.describe()); 
console.log(student2.study());