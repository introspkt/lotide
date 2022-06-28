const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Asseration Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  if (array !== []) {
    return array[0];
  } else {
    return undefined;
  }
};

module.exports = head;
