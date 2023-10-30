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


const map = function(array, callback) {
  const result = [];
  for(const item in array) {
    result.push(callback(item));
  }
  
  return result;
};
console.log(map);
// i think 
const words = ["hello", "world"];
const expected = ['HELLO', 'WORLD'];
const actual = map(words, word => word.toUpperCase());
assertArraysEqual(actual, expected);
//please work

module.exports = map

