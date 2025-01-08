// Create a custom iterable object that iterates over an array in reverse order
const reverseIterable = (arr) => {
    return {
      [Symbol.iterator]() {
        let index = arr.length - 1;  
        return {
          next() {
            if (index >= 0) {
              return { value: arr[index--], done: false };  // Return value and move the index
            }
            return { value: undefined, done: true };  // Iteration is done
          }
        };
      }
    };
  };
   const arr = [1, 2, 3, 4];
  const reverseIterator = reverseIterable(arr);
  
  for (const value of reverseIterator) {
    console.log(value);  
  }
  