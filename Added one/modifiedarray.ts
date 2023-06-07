function modifyNumbers(numbers: number[]): number[] {
    return numbers.map(num => num % 5 === 0 ? num : num * 2);
  }
  
  function findDivisibleByFive(numbers: number[]): number[] {
    return numbers.filter(num => num % 5 === 0);
  }
  const numbersArray = [10, 14, 25, 38, 40, 47, 50, 55, 59, 60];
  const modifiedNumber = modifyNumbers(numbersArray);
  console.log(modifiedNumber); 
  
  const divisibleByFive = findDivisibleByFive(modifiedNumber);
  console.log(divisibleByFive);