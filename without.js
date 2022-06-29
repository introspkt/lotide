onst eqArrays = function(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    } return true;
  };
  
  const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected) === true) {
      console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
    }
  };
  
  const without = function(source, itemsToRemove) {
    for (let i = 0; i < source.length; i++) {
      for (let j = 0; j < itemsToRemove.length; j++) {
        if (source[i] === itemsToRemove[j]) {
          source.splice(i, 1);
        }
      }
    }
 
    return source;
  };
  
  assertArraysEqual(without([1,2,3], [1]), [2,3]);
  assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  
  const words = ["hello", "world", "lighthouse"];
  without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case

  assertArraysEqual(words, ["hello", "world", "lighthouse"]);
  
