// Student constructor function
function Student(name, grade) {
    this.name = name;
    this.grade = grade;

    // Method to simulate studying
    this.study = function() {
        console.log(`${this.name} is studying.`);
    };

    // Method to get the student's grade
    this.getGrade = function() {
        return this.grade;
    };
}

// Create a few Student instances
const student1 = new Student("Alice", "A");
const student2 = new Student("Bob", "B");
const student3 = new Student("Charlie", "C");

// Call the study() method and use getGrade()
console.log("Student 1:");
student1.study();
console.log("Grade:", student1.getGrade());

console.log("Student 2:");
student2.study();
console.log("Grade:", student2.getGrade());

console.log("Student 3:");
student3.study();
console.log("Grade:", student3.getGrade());
