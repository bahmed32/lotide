const assertEqual = function(actual, expected) {
  if( actual === expected) {
  return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if(actual !== expected) {
    return (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  
  };
  
  
  console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
  console.log(assertEqual(1,1));
  console.log(assertEqual(1,2));
  