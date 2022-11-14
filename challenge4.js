// For each challenge you complete, include comments showing the **overall goal** in your own words, your **pseudocode**, and your **final solution**. 
// Start with an array of strings. Print only the words that include the letter combination "ing".

// The directions pretty much sum it up, I could maybe make it clearer by saying print each word from the array that includes "ing" and no other words from the array.

// 1. Create an array that includes some strings with ing and some without
// 2. Find a suitable method for matching a pattern in a string - most likely .includes()
// 3. Run a for loop that checks each value in the array and prints only the ones that have ing

var array = ["string", "jumping", "guitar", "helping", "whoops", "winged", "hinge"]

// version 1 - shows that .includes only returns true or false, not the element value

// for (var i = 0; i < array.length; i++) {
//     console.log(array[i].includes("ing"))
// }


// version 2 adds an if statement to then print the actual string values of the array that match our condition

for (var i = 0; i < array.length; i++) {
    if (array[i].includes("ing")) {
        console.log(array[i])
    }
}