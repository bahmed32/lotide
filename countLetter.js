const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

};

const countLetters = function(str) {
  const result = {};

  for (const letter of str) {

    if (!result[letter]) {
      result[letter] = 0;

    }
    result[letter]++;
  }
  return result;

};

const result1 = countLetters("hello");
console.log(assertEqual(result1["h"], 1));  
console.log(assertEqual(result1["e"], 1));  
console.log(assertEqual(result1["l"], 2));  
console.log(assertEqual(result1["o"], 1));

module.exports = countLetters