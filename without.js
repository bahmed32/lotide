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
// Implement without which will return a subset of a given array, removing unwanted elements.

// This function should take in a source array and a itemsToRemove array.
//It should return a new array with only those elements from source that are not present in the itemsToRemove array.

// Here are a couple examples, but please don't limit your testing to just these scenarios:

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
// Instruction
// Use assertArraysEqual to write test cases for various scenarios.

// The tests can be written below the definition of your function.

// Warning
// It's okay for without to not function correctly when using nested arrays or arrays of objects. We will save this "deeper" problem for another day.

// Instruction
// Write a test case to make sure that the original array is not modified.

// Among your test cases, be sure to include an important test that is easy to overlook: The without function should be returning a new array and not modify the original array that is passed in. Let's write a test case to ensure this:

const without = function(source, itemsToRemove) {
  const result = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
    return result;
  }
};


const words = ["hello", "world", "lighthouse"];
const cutWords = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(cutWords, ["hello", "world"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

module.exports = without;