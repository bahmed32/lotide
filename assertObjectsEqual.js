function eqObjects(obj1, obj2) {
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false; //We close the program as one of the key value pair does not match.
    }
  }
  return true; //We return true after the loop making sure that all the keys and values are equal.
}



const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};







const obj1 = { name: 'John', age: 30 };
const obj2 = { name: 'John', age: 30 };
assertObjectsEqual(obj1, obj2);
module.exports = assertObjectsEqual;
