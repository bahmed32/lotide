
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




const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

};





//Implement the definition for function eqObjects 
//which will take in two objects and returns true or false, based on a perfect match.

const eqObjects = function(object1, object2) {

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);


  if (keys1.length !== keys2.length) {
    return false;
    
  }

 
  for (const key of keys1) {
    if (Array.isArray(object1[key] ) &&  Array.isArray(bject2[key])) {
      return false;
    }
  }


  return true;
};
// ughhhhh its not weorking g sjjnfnjsfkl!!!!!!
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(assertEqual(eqObjects(shirtObject, anotherShirtObject,), true)); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false)); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true)); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false)); // => f