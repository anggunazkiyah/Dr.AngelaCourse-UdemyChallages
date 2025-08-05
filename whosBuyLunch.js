// Picks a random person to pay for lunch
function whosPaying(...names) {
    // If the first argument is an array, use it directly
    if (names.length === 1 && Array.isArray(names[0])) {
        names = names[0];
    }

    // Pick a random name from the list
    const randomPerson = names[Math.floor(Math.random() * names.length)];

    // Return the message
    return `${randomPerson} is going to buy lunch today!`;
}

// Examples
console.log(whosPaying("Angela", "Ben", "Jenny", "Michael", "Chloe")); // Output: Jenny is going to buy lunch today!
console.log(whosPaying("Angela", "Ben", "Jenny", "Michael", "Chloe")); // Output: Angela is going to buy lunch today!
