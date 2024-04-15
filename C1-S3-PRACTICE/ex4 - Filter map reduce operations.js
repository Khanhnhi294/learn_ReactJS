let numbers = [1, 2, 3, 4, 5];

// Write the function to filter out even numbers from an array
// You need to use the array.filter() function
function filterEvenNumbers(arr) {
  const even = arr.filter( arr => arr % 2 === 0);
}
// Function to map array elements to their squared values
// You need to use the array.map() function
function squareNumbers(arr) {
  const Squared = arr.map( num =>num * num);
}


// Function to compute the sum of array elements
// You need to use the array.reduce() function
function sumArray(arr) {
    const sumArr = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log("Even numbers:", filterEvenNumbers(numbers)); // [2, 4]
console.log("Squared numbers:", squareNumbers(numbers)); // [1, 4, 9, 16, 25]
console.log("Sum of numbers:", sumArray(numbers)); // 15