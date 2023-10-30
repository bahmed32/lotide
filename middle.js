const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const middle = function(arr) {
const middleIndex = Math.floor(arr.length / 2);

if (arr.length <= 2) {
  return [];
}

if (arr.length % 2 === 0) {

  return [arr[middleIndex - 1], arr[middleIndex]];
} else {
 
  return [arr[middleIndex]];
}
};

//Implement middle function 
// const middle = function(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.length > 0) {
//       return arr[Math.floor(arr.length / 2)]
//         ;
//     }
//   }

// };

module.exports = middle;