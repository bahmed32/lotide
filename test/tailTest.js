
const assert = require('chai').assert;
const tail =  require('../tail');


// // Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!
// console.log(assertEqual(tail(words), ["Lighthouse", "Labs"]));

it("does not modify the original array", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  const result = tail(words);
  assert.strictEqual(words.length, 3);
});

it("returns ['Lighthouse', 'Labs'] when called with ['Yo Yo', 'Lighthouse', 'Labs']", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  const result = tail(words);
  assert.deepEqual(result, ["Lighthouse", "Labs"]);
});

it("returns [] when called with an array of one element", () => {
  const words = ["Hello"];
  const result = tail(words);
  assert.deepEqual(result, []);
});