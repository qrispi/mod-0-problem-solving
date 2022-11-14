// For each challenge you complete, include comments showing the **overall goal** in your own words, your **pseudocode**, and your **final solution**. 
// Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a sentence using string interpolation. For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!" 

// I need to create a sentence that will use interpolation to alphabetically organize all the places I would like to visit in a grammatically correct format

// 1. create an array of destinations
// 2. find a method that will organize an array alphabetically, google says to try .sort()
// 3. Create a for loop that will print sentences of places in alphabetical order


var places = ["Brazil", "Australia", "Japan", "Big Sky", "Amsterdam"]

// version 1: terminal does not like places[i].sort() so I likely need to create a separate array that has been sorted

// for (var i = 0; i < places.length; i++) {
//     console.log(`If I was going to travel to my must-see places in alphabetical order, I would start with: ${places[i].sort()}!`)
// }

// version 2: this works but now prints my the same sentence for every value in the array so I need to add an if/else if statement

// for (var i = 0; i < places.length; i++) {
//     var placesAlpha = places.sort()
//     console.log(`If I was going to travel to my must-see places in alphabetical order, I would start with: ${placesAlpha[i]}!`)
// }

// version 3: adds if, else if, and else statements to change the sentences for the appropriate i value

for (var i = 0; i < places.length; i++) {
    var placesAlpha = places.sort()
    if (i === 0) {
    console.log(`If I was going to travel to my must-see places in alphabetical order, I would start with: ${placesAlpha[i]}!`)
    } else if (i === 1) {
        console.log(`The second place I would visit is: ${placesAlpha[i]}!`)
    } else {
        console.log(`After that, I would go to: ${placesAlpha[i]}!`)
    }
}