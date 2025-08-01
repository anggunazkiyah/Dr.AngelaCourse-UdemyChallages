function isLeap(year) {     
    // A leap year:
    // - is divisible by 4
    // - but NOT divisible by 100, UNLESS it's also divisible by 400

    // Check if the year is divisible by 4 AND not divisible by 100,
    // OR if it's divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "Leap year."; // Return this if the year is a leap year
    } else {
        return "Not leap year."; // Return this if it's not a leap year
    }
}

// Test cases to check the function:
console.log(isLeap(2400)); // Output: Leap year.
console.log(isLeap(2003)); // Output: Not leap year.
console.log(isLeap(1989)); // Output: Not leap year.
