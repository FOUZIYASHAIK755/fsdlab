class InfiniteCounter {
    constructor(maxSteps) {
      this.current = 1;  // Starting number
      this.maxSteps = maxSteps;  // Maximum steps
      this.count = 0;  // Counter to track the number of iterations
    }
  
    // The iterator protocol method
    [Symbol.iterator]() {
      return this;
    }
  
    // The next method to return the next number in the sequence
    next() {
      if (this.count < this.maxSteps) {
        this.count++;
        return { value: this.current++, done: false }; // Return the current value and increment it
      } else {
        return { done: true }; // Stop the iteration after maxSteps
      }
    }
  }
    const counter = new InfiniteCounter(10);
  
  // Iterate over the counter and display the results
  for (let num of counter) {
    console.log(num); 
  }
  