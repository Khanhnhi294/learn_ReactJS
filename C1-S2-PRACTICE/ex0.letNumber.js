let numbers = [1, 2, 3, 4, 5];

// Add an element at the end of the array
numbers.push("5");

// Loop on all array elements
numbers.forEach(function(number) {
    console.log(number);
});

// Access to the array element with its index
for (let i = 0; i < numbers.length; i++) {
    console.log("Element at index " + i + " is: " + numbers[i]);
}

// Remove an array element with its index
numbers.splice(2, 2);
console.log(numbers);

// Filter array elements
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers);

// Transform each array element by applying a function on them
let doubledNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log(doubledNumbers);
