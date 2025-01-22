function* cumulativeSum(arr) {
    let sum = 0;
   
    for (let num of arr) {
      sum += num;
      yield sum;
    }
 
    return sum;
  }
 
  const numbers = [10, 20, 30, 40];
  const gen = cumulativeSum(numbers);
 
  let result = [];
  for (let value of gen) {
    result.push(value);
  }
 
  const finalSum = gen.return().value;
 
  console.log("Cumulative sums:", result);
  console.log("Final sum:", finalSum);
 