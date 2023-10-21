
// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

// The message will be similar to that of Array. In fact, you could refer to the code for Array to help you implement this. 
//Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.

// Warning
// Functions that do not return values and instead print out messages to the console are more difficult to test using assertions. This is because we cannot simply compare their return value to an expected value.

// For this reason, we will not be writing assertions (test code) for assertArraysEqual. That said, you can and should call the function below its declaration and visually ensure that the message printed to the console is accurate.


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
}


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

assertArraysEqual(["Lighthouse Labs"], ["Bootcamp"]);
assertArraysEqual([1], [1]);
assertArraysEqual([1], [2]);


    