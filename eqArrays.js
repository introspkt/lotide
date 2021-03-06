const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
     
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i]) && (eqArrays(array1[i], array2[i]) === false)) {
        
        return false;
      }
      if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]) {
        
        return false;
      }
    } 
    return true;
  };
  
  module.exports = eqArrays;

//eqArrays([1, 2, 3], [1, 2, 3]) // => true
//eqArrays([1, 2, 3], [3, 2, 1]) // => false

//eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
//eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
