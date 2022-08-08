// assertEquals Func 

const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
// countLetters func

  const countLetters = function(str) {
    let counter = {};
  
    for (let value of str) {
      if (value === ' ') {
        continue;
      } else {
        counter[value] = (counter[value] || 0) + 1;
      }
    }
    return counter;
  };
  countLetters("now in the mix with DJ Introspkkt");
  console.log(countLetters("now in the mix with DJ Introspkt"));
  
  module.exports = countLetters;


