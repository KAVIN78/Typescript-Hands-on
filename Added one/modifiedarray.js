function modifyNumbers(numbers) {
    return numbers.map(function (num) { return num % 5 === 0 ? num : num * 2; });
}
function findDivisibleByFive(numbers) {
    return numbers.filter(function (num) { return num % 5 === 0; });
}
// Example usage
var numbersArray = [10, 14, 25, 38, 40, 47, 50, 55, 59, 60];
var modifiedNumber = modifyNumbers(numbersArray);
console.log(modifiedNumber); // Output: [10, 28, 25, 76, 40, 94, 50, 55, 118, 60]
var divisibleByFive = findDivisibleByFive(modifiedNumber);
console.log(divisibleByFive); // Output: [10, 25, 40, 50, 55, 60]
