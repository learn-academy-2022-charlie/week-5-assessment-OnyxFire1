// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("msgInABottle", () => {
    
    const secretCodeWord1 = "Lackadaisical"
    const secretCodeWord2 = "Gobbledygook"
    const secretCodeWord3 = "Eccentric"

   it("returns a coded message", () => {
        expect(msgInABottle(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(msgInABottle(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(msgInABottle(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})
// const secretCodeWord1 = "Lackadaisical"
// // Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
// // Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
// // Expected output: "3cc3ntr1c"

// ReferenceError: MsgInABottle is not defined


// b) Create the function that makes the test pass.

// Pseudocode:

// Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
// Use a conditional statement to convert letters to numbers
// Use .replace to return a new string with some or all matches of the pattern
// Within the back slashes is the pattern that regex will use.
// The g right outside of the backslash stands for global meaning it will search for every instance and the i means case insensitive.
// Return coded message.

const msgInABottle = (string) => {
    return string.replace(/a/gi, "4").replace(/e/gi, "3").replace(/i/gi, "1").replace(/o/gi, "0")
    
  }

  // ./code-challenges.test.js
  // msgInABottle
  //   ✓ returns a coded message (3 ms)

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.
 
// a) Create a test with expects statement using the variable provided.

describe ("parLet",()=> {
    it("returns all the words that contain that particular letter",() => {
        const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Apple", "Banana", "Orange"]
        const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
        expect(parLet(arrayOfWords1,letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(parLet(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// ReferenceError: parLet is not defined


// b) Create the function that makes the test pass.

// Pseudocode:

//Create a function that returns all the words that contain that particular letter.
// The method .filter will create a new array with all elements that will past the test implemented by the function provided.
// To convert a string to lowercase use .lowerCase to look for the letter we need even if the word is capitalized.
// Then .indexOf to return the first index and if not present will be indicated by -1.

const parLet = (array, letter) => {
    let newArray = array.filter(word => word.toLowerCase().indexOf(letter) !== -1)
return newArray
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("pokerPlayer",() => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house",() =>{
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        expect(pokerPlayer(hand1)).toEqual(true)
        expect(pokerPlayer(hand2)).toEqual(false)
        expect(pokerPlayer(hand3)).toEqual(false)
    })
})

// // ReferenceError: pokerPlayer is not defined

// // b) Create the function that makes the test pass.


// Pseudocode:

//The function should take in an array of 5 numbers and determines whether or not the array is a “full house”.
// First we need to know if we have three of a kind and two of a kind in the hand.
// The map method calls the callback function one time for each element in the array.
// Calls a defined callback function on each element of an array, and returns an array that contains the results.
// Iterate over array and push the sum of the repeated numbers to the nums array, use.map.
// To determine an array includes a certain value and return true/false use .includes.

const pokerPlayer = (array) => {
 let nums = []
 array.map((v, i, a) => {
  let gamble = a[i]
  nums[gamble] ? nums[gamble] += 1 : nums[gamble] = 1

 })
 
 return nums.includes(3) && nums.includes(2) ? true : false
};


// ✓ returns all the words that contain that particular letter
// ✓ takes in an array of 5 numbers and determines whether or not the array is a full house

    
    
    


    