const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

};



const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }


  return true;
};


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};



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
const numbers = [1, 2, 3, 4, 5];
const odd = [1,3,5,7,8];

console.log(middle(numbers, 3));
console.log(assertEqual(middle(numbers), ["3"]));
console.log(assertEqual(middle(odd), ["5"]));