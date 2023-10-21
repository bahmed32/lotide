const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

};
//countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.{


const countOnly = function(allItems, itemsToCount) {
  const result = {};

  for (const items of allItems) {

    if (!itemsToCount[items]) {
      continue;
    }
    if (!result[items]) {
      result[items] = 1;

    }
    result[items]++;
  }
  return result;

};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));

console.log(result1);