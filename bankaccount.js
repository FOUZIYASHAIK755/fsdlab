// Define the Rectangle class
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Method to calculate the area of the rectangle
    area() {
        return this.width * this.height;
    }
}

// Create an instance of Rectangle with width 5 and height 10
const myRectangle = new Rectangle(5, 10);

// Log the area to the console
console.log("Area of the rectangle:", myRectangle.area()); // Output: Area of the rectangle: 50
