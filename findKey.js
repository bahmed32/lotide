// //Implement the function findKey which takes in an object
// and a callback. 
// It should scan the object and return the first key 
//for which the callback returns a truthy value. 
// If no key is found, then it should return undefined.   


const findKey = function(obj, callback) {

  const keys = Object.keys(obj);
  for (const key of keys) {
    const item = obj[key];

    const value = callback(item);
    if (value) {
      return key;
    }
  }

};
const data = {
  apple: 3,
  banana: 5,
  cherry: 1,
  date: 7,
  elderberry: 2,
};

const result = findKey(data, item => item > 4);
console.log(result)