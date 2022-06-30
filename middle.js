const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    return array.slice(array.length / 2 - 1, array.length / 2 + 1)
  } else {
     let newArray = [];
     let middleNum = Math.round(array.length /2)
     newArray.push(array[middleNum -1]);
     return newArray;
  }
};

module.exports = middle;



//NOTES
//const eqArrays = require('./eqArrays');
//const assertArraysEqual = function(actual, expected) {
  //if (eqArrays(actual, expected)) {
    //console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  //} else {
   // console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
    //  }
    //};

//module.exports = assertArraysEqual;

//const eqArrays = function(array1, array2) {
    //if (array1.length !== array2.length) {
     
    //  return false;
   // }
    //for (let i = 0; i < array1.length; i++) {
     // if (Array.isArray(array1[i]) && (eqArrays(array1[i], array2[i]) === false)) {
        
       // return false;
      //}
     // if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]) {
        
       // return false;
   //   }
   // } 
  //  return true;
 // };
  
  //module.exports = eqArrays;

//middle([1]) // => []
//middle([1, 2]) // => []
//middle([1, 2, 3]) // => [2]
//middle([1, 2, 3, 4, 5]) // => [3]
//middle([1, 2, 3, 4]) // => [2, 3]
//middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
