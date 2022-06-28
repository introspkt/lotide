const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Asseration Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(words) {
  let newArray = [];
  if (words.length === 1 || words.length === 0) {
    newArray = [];
  } else {
    for (let x = 1; x < words.length; x++) {
      newArray.push(words[x]);
    }
  }
  return newArray;
}; 
};
