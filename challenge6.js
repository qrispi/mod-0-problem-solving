// For each challenge you complete, include comments showing the **overall goal** in your own words, your **pseudocode**, and your **final solution**. 
// Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized. For example, if you were given "Turing is the best", return "Turing Is The Best" instead!

// Take a variable with a string, capitalize every value in the string and print a new string with every variable capitalized.

// 1. create a variable with a sentence as a single string
// 2. isolate the string into an array with each word from the string as a separate string using split(' ') method
// 3. isolate the first letter from each string in the previous array and capitalize it using charAt() method and toUpperCase() method
// 4. re-combine the separated and capitalized array into a single string and print it using the join(' ') method

// var sentence = "I really enjoyed mod0 - Kaitlyn is the best!"

// var sentenceSplit = sentence.split(' ')

// lets test to make sure our output is correct - it's a good thing I did because I forgot the space in split(' ') and it split every character of the string into a new variable

// console.log(sentenceSplit)

// var wordCaps = sentenceSplit.charAt(0).toUpperCase()

// lets test to make sure it's working. terminal doesn't like that .charAt is attached to an array. maybe we can isolate it with a for loop
// This capitalizes the first letter but the only output we get is the first letter.... how to combine it back into the original string?

// for (i = 0; i < sentenceSplit.length; i++) {
//     var wordCaps = sentenceSplit[i].charAt(0).toUpperCase()
//     console.log(wordCaps)
// }

// Maybe if we use .shift and .unshift to add the capital letters? lets try it out. looks like we need to split each string again into an array! And once that's working, join to bring the array back into a string. Hooray, this part works!

// var test = "word"

// var testArray = test.split('')

// var capLetter = "W"

// testArray.shift()

// testArray.unshift(capLetter)

// console.log(testArray.join(''))

// var sentence = "I really enjoyed mod0 - Kaitlyn is the best!"

// var sentenceSplit = sentence.split(' ')

// This version capitalizes the first letter and returns string values but still prints each string on a separate line. How can I store the values created from each for loop outside the for loop????

// for (i = 0; i < sentenceSplit.length; i++) {
//     var capLetter = sentenceSplit[i].charAt(0).toUpperCase()
//     var eachWord = sentenceSplit[i]
//     var eachLetter = eachWord.split('')
//     eachLetter.shift()
//     eachLetter.unshift(capLetter)
//     var capWord = eachLetter.join('')
//     var newArray = []
//     newArray.push(capWord)
//     var newSentence = newArray.join('')
//     console.log(newSentence)
// }

// This version works!!! Maybe I can make it cleaner?

// var newSentence = ""

// for (i = 0; i < sentenceSplit.length; i++) {
//     var capLetter = sentenceSplit[i].charAt(0).toUpperCase()
//     var eachWord = sentenceSplit[i]
//     var eachLetter = eachWord.split('')
//     eachLetter.shift()
//     eachLetter.unshift(capLetter)
//     var capWord = eachLetter.join('')
//     newSentence += capWord + " "
// }

// console.log(newSentence)






// FINAL EXPRESSION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var sentence1 = "I really enjoyed mod0 - Kaitlyn is the best!"
var sentence2 = "Wow, this challenge really threw me for a loop!"

function capEachWord(input) {
    var sentenceSplit = input.split(' ')
    var newSentence = ""
        for (i = 0; i < sentenceSplit.length; i++) {
            var capLetter = sentenceSplit[i].charAt(0).toUpperCase()
            var eachLetter = sentenceSplit[i].split('')
            eachLetter.shift()
            eachLetter.unshift(capLetter)
            var capWord = eachLetter.join('')
            newSentence += capWord + " "
        }
    console.log(newSentence)
}

capEachWord(sentence1)
capEachWord(sentence2)




// var sentence = "I really enjoyed mod0 - Kaitlyn is the best!"

// var sentenceSplit = sentence.split(' ')

// var newSentence = ""

// for (i = 0; i < sentenceSplit.length; i++) {
//     var capLetter = sentenceSplit[i].charAt(0).toUpperCase()
//     var eachWord = sentenceSplit[i]
//     var eachLetter = eachWord.split('')
//     eachLetter.shift()
//     eachLetter.unshift(capLetter)
//     var capWord = eachLetter.join('')
//     newSentence += capWord + " "
// }

// console.log(newSentence)