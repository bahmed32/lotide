const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


// Implement middle which will take in an array and 
// return the middle-most element(s) of the given array.

//Implement middle function 
const middle = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length > 0) {
      return arr[Math.floor(arr.length / 2)]
        ;
    }
  }

};

module.exports = middle;