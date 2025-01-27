function hasTargetSum(array, target) {
  // Write your algorithm here
  // 1. loop through each number
  for(let i = 0; i < array.length; i++) {
    // 2. loop through the rest of the numbers
    for(let j = i + 1; j < array.length; j++) {
      // 3. add each number together and compare to target
      if(array[i] + array[j] === target) {
        // 4. if === target, return true
        return true;
      }
    }
  }
  // 5. else return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
  quadratic time O(n^2)
*/

/* 
  Add your pseudocode here
  1. loop through each number
  2. loop through the rest of the numbers
  3. add each number together and compare to target
  4. if === target, return true
  5. else return false
*/

/*
  Add written explanation of your solution here
  Write a function called hasTargetSum that receives two arguments: an 'array' of integers and a 'target' integer.  The function should return true if any pair of numbers in the array adds up to the target number.
  Take first number and add it to each number in array. if === target, return true, else return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;


//canvas solution 1 below O(n^2) quadratic time:

// function hasTargetSum(array, target) {
//   // iterate over the array of numbers
//   for (let i = 0; i < array.length; i++) {
//     // for the current number, identify a complementary number that adds to our target
//     // (for example: if our number is 2, and the target is 5, the complementary number is 3)
//     const complement = target - array[i];
//     // iterate over the remaining numbers in the array
//     for (let j = i + 1; j < array.length; j++) {
//       // check if any of the remaining numbers is the complement
//       // if so, return true
//       if (array[j] === complement) return true;
//     }
//   }
//   // if we reach the end of the array, return false
//   return false;
// }

// canvas solution 2 below O(n) linear:
// function hasTargetSum(array, target){
//   // create an object to keep track of numbers we've already seen
//   const seenNumbers = {};
//   // iterate through each number in the array
//   for(i = 0; i < array.length; i++) {
//     // for the current number, identify a complement at adds to it and becomes the target (complement = target - current number)
//     const complement = target - array[i];
//     // if the key in our object is a complement, return true
//     if(seenNumbers[complement]) return true;
//     // otherwise, add it to the seenNumbers object to keep track of it
//     seenNumbers[array[i]] = true;
//   }
//   // if not found, return false
//   return false;
// }

//canvas solution 2 refactored, still O(n) linear runtime:
// function hasTargetSum(array, target) {
//   const seenNumbers = {}

//   for(const number of array) {
//     const complement = target - number;
//     if(seenNumbers[complement]) return true;
//     seenNumbers[number] = true;
//   }
//   return false;
// }

//canvas solution 2.1 refactored, still O(n) linear runtime:
// function hasTargetSum(array, target) {
//   const seenNumbers = {}

//   for(const number of array) {
//     const complement = target - number;
//     if(complement in seenNumbers) return true;   <--change here with 'in' keyword
//     seenNumbers[number] = true;
//   }
//   return false;
// }