/**
 * 99 Bottles of Beer Challenge
 * 
 * A classic programming exercise that prints the lyrics to the traditional
 * "99 Bottles of Beer" song. The program counts down from 99 to 1, handling
 * proper grammar for singular/plural forms and the traditional ending.
 * 
 */

// Initialize counter variable starting at 99 bottles
let i = 99;

// Main loop: Continue while we still have bottles (i >= 1)
while (i >= 1) {
    
    // Special case: Handle the last bottle (singular form)
    if (i === 1) {
        // Use "bottle" (singular) instead of "bottles" for i = 1
        console.log(`${i} bottle of beer on the wall, ${i} bottle of beer.`);
        // When taking the last bottle, we have "no more bottles"
        console.log(`Take one down and pass it around, no more bottles of beer on the wall.`);
    
    } else {
        // Regular case: Handle all other numbers (plural form)
        // Use "bottles" (plural) for i > 1
        console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
        
        // Nested condition: Check what the next number will be
        if (i - 1 === 1) {
            // If next number is 1, use singular "bottle"
            // This happens when i = 2 (2 bottles -> 1 bottle)
            console.log(`Take one down and pass it around, ${i-1} bottle of beer on the wall.`);
        } else {
            // If next number is 2 or more, use plural "bottles"
            // This handles all cases from 99 -> 98, 98 -> 97, etc.
            console.log(`Take one down and pass it around, ${i-1} bottles of beer on the wall.`);
        }
    }
    
    // Decrement counter to move to the next verse
    // i-- is equivalent to i = i - 1
    i--;
}

// Traditional ending verse - sung after all bottles are gone
// This completes the traditional song format
console.log("No more bottles of beer on the wall, no more bottles of beer.");
console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");

/**
 * Expected Output:
 * 99 bottles of beer on the wall, 99 bottles of beer.
 * Take one down and pass it around, 98 bottles of beer on the wall.
 * 98 bottles of beer on the wall, 98 bottles of beer.
 * ...
 * 2 bottles of beer on the wall, 2 bottles of beer.
 * Take one down and pass it around, 1 bottle of beer on the wall.
 * 1 bottle of beer on the wall, 1 bottle of beer.
 * Take one down and pass it around, no more bottles of beer on the wall.
 * No more bottles of beer on the wall, no more bottles of beer.
 * Go to the store and buy some more, 99 bottles of beer on the wall.
 */
