function sum(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  const total = [92,35,42,63];
  console.log("Sum:", sum(total));