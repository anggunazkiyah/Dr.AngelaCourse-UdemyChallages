// Fibonacci Generator Function
// Generates the first n numbers in the Fibonacci sequence
// Returns an array of Fibonacci numbers starting from 0

// Function implementation
function fibonacciGenerator(n) {
    // Handle edge case: no numbers requested
    if (n === 0) {
        return [];
    }
    
    // Handle edge case: only first number requested
    if (n === 1) {
        return [0];
    }
    
    // Handle edge case: only first two numbers requested
    if (n === 2) {
        return [0, 1];
    }
    
    // For n >= 3, start with the first two Fibonacci numbers
    var numbers = [0, 1];
    
    // Generate remaining numbers using the Fibonacci rule
    // Each new number = sum of the previous two numbers
    for (var i = 2; i < n; i++) {
        var newNumber = numbers[i-1] + numbers[i-2];  // Add last two numbers
        numbers.push(newNumber);                       // Add to array
    }
    
    return numbers;
}

// Test cases
console.log(fibonacciGenerator(5)); // Expected: [0,1,1,2,3]
console.log(fibonacciGenerator(7)); // Expected: [0,1,1,2,3,5,8]
console.log(fibonacciGenerator(8)); // Expected: [0,1,1,2,3,5,8,13]
