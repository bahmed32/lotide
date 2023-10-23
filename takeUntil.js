// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

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


//Implement takeUntil which will keep collecting items from a provided array
// until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      break; 
    }
    result.push(item);
  }
  return result;
};

const data3 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const results3 = takeUntil(data3, x => x > 70);
const expected3 = [10, 20, 30, 40, 50, 60, 70];

const data4 = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
const results4 = takeUntil(data4, x => x === "date");
const expected4 = ["apple", "banana", "cherry"];

assertArraysEqual(results3, expected3);
assertArraysEqual(results4, expected4);