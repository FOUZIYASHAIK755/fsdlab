function* fibonacciGenerator() {
    let a = 0, b = 1;
 
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
 
  const fibGen = fibonacciGenerator();
  for(let i=0;i<8;i++)
   console.log(fibGen.next().value);