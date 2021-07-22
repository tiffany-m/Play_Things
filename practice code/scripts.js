// // FIZZBUZZ CHALLENGE
// // for (let i = 1; i <= 100; i++) {
// //   if(i % 3 === 0 && i % 5 === 0) {
// //     console.log("FizzBuzz")
// //   } else if(i % 3 === 0) {
// //     console.log("Fizz")
// //   } else if(i % 5 === 0) {
// //     console.log("Buzz")
// //   } else {
// //     console.log(i)
// //   }
// // }

// Write a function lcm that takes two natural numbers and calculates their least common multiple (lcm). The lcm of two natural numbers a und b is the smallest natural number that is divisible by a and b. Example: lcm(4, 6) should return 12.

// function lcm(a, b) {

//   let theLCM = 0;
//   let remainderA;
//   let remainderB;

//   do {

//     theLCM++;
//     remainderA = theLCM % a;
//     remainderB = theLCM % b;

//   } while (remainderA !== 0 || remainderB !== 0)

//   return theLCM;
// }

// Write a function addTo that accepts a number as a parameter and adds all natural numbers smaller or equal than the parameter. The result is to be returned.

// Example: addTo(3) should return 1+2+3 = 6.

// function addTo(a) {
// let added = 0

// if(a === 0) {
// return a
// } else {
// for(let i = 1; i <= a; i++) {
// added = added + i

// }return added
// }
// }


// // FUNCTION EXPRESSION
// // let adder = function(a, b) {
// //   return a + b
// // }
// // adder(1, 2)

// // ARROW FUNCTION
// // let adder  = (a, b) => a + b
// // adder(1, 2)

// // let arr = [1, 2, 3, 4, 5]

// // for(let i = 0; i < arr.length; i++) {
// //   console.log(arr[i])
// // }


// // var myArray = ['A', 'B', 'C'];
// // for (var i = 0; i < myArray.length; i++) {
// //   console.log('The member of myArray in index ' + i + ' is ' + myArray[i]);
// // }

// // let i = 0


// // do {
// //   i++
// //   console.log(i)
// // } while (i < 5)


// // var myArray = ["a", "b", "c"]

// // for (let value of myArray) {
// //   console.log(value)
// // }


// // var myArray = ['a', 'b', 'c'];

// // for (let value of myArray) {
// //   value = value + value
// //   console.log(value);
// // }


// // var myArray = [[1, 2], [2, 3], [3, 4]]

// // for (let value of myArray) {
// //   console.log(value)
// // }

// var car ={type: 'Fiat',
//           model: '500', 
//           color: 'white', 
//           drive: function() {console.log('vroom vroom')
// }
// }

// car.drive()



// Write a function addWithSurcharge that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10 and less than or equal to 20, the surcharge is 2. For each amount greater than 20, the surcharge is 3.

// Example: addWithSurcharge(10, 30) should return 44.
// function addWithSurcharge(a, b) {
//   let surcharge = 0;

//   if (a <= 10) {
//     surcharge = surcharge + 1;
//   } else if ((a > 10) & (a <= 20)) {
//     surcharge = surcharge + 2;
//   } else {
//     surcharge = surcharge + 3;
//   }

//   if (b <= 10) {
//     surcharge = surcharge + 1;
//   } else if ((b > 10) & (b <= 20)) {
//     surcharge = surcharge + 2;
//   } else {
//     surcharge = surcharge + 3;
//   }

//   return a + b + surcharge;
// }

// Write a function that accepts an array of strings. Return the longest string.

// function longestString(arr) {
//   let length = 0
//   let ls = arr[0]
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i].length === length || arr[i].length < length){
//       return
//     } else {
//       length = arr[i].length
//       ls = arr[i]
//     }
//     return arr[i]
//   }
// }

// longestString(['aaaaa', 'bbb', 'cccc'])

// Create a function that takes in two strings as two parameters and returns a boolean that indicates whether or not the first string is an anagram of the second string.

// function isAnagram(a, b) {
//   let reverseStr = a.split('').reverse().join('')
//   if(reverseStr === b) {
//     return true
//   } else {
//     return false
//   }
// }

// isAnagram('abc', 'cba')

// Given a string, write a function that will return whether or not that string is a palindrome. (Phrase that reads same backwards and forwards)

// function isPalindrome(str) {
//   let palindrome = str.split('').reverse().join('')
//   if(str === palindrome) {
//     return true
//   } else {
//     return false
//   }
// }

// isPalindrome('strts')

// Search a string to see if a specific word is in it.

// function findWord(str) {
// //make string into array
// let newArr = str.split(' ')
// //search the array the matching word
// for(let i = 0; i < newArr.length; i++) {
//   if(newArr[i] === 'book') {
//     return true
//   }
// }
// return false
// }

// findWord('my favorite book is')

// Write a function add that takes a string with a summation task and returns its result as a number. A finite number of natural numbers should be added. The summation task is a string of the form '1+19+...+281'.

// Example: add('7+12+100') should return 119.

// function add(str) {
// let arr = str.split('+')
// let sum = 0
// for(let i = 0; i < arr.length; i++) {
//  sum = sum + Number(arr[i])
// } 
// return sum
// }

// add('1+2+3+4')

// How to reverse an array/string
// How to identify if winner in tictac toe BeforeUnloadEvent
// count eeverytime someone clicks a GamepadButton
// write math program to find factorial of a number



// it er ation


// Write a function sumMultiples taking a natural number n and returning the sum of all multiples of 3 and of 5 that are truly less than n.

// Example: All multiples of 3 and 5 less than 20 are 3, 5, 6, 9, 10, 12, 15 and 18. Their sum is 78. sumMultiples(20) should return 78.

// function sumMultiples(n){
// let sum = 0

// for(let i = n; i != 0; i--) {
// if(i <= 3){
// return 0
// } else if (i % 3 === 0 || i % 5 === 0) {
// sum = sum + i
// }
// return sum
// }
// }

const testDiv = document.getElementById('test')
const changeBtn = document.getElementById('change')
const newText = 'text changed'

function changeText() {
  testDiv.innerHTML = `${newText}`
}

changeBtn.addEventListener('click', changeText)

