// We'll implement a new function letterPositions which will return all the indices (zero-based positions) 
// in the string where each character is found.

const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i];

    if(character === " "){
    continue;
    }
    
    if(!results[character]){
    results[character] = [i];
    } else {
      results[character].push(i);
    }
  }
    
  
  return results;
};

const result = letterPositions("hello");
console.log("Testing letterPositions(\"hello\"):");
console.log(result);

