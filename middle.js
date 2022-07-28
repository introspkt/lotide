//Starting Notes
//The middle function should return an array with only the middle element(s) of the provided array
//For arrays with one or two elements, there is no middle. Return an empty array. 
// --> middle([1]) // => []
//--> middle([1, 2]) // => []

//For arrays with odd number of elements, an array containing a single middle element should be returned
// --> middle([1, 2, 3]) // => [2]
// --> middle([1, 2, 3, 4, 5]) // => [3]

//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
// --> middle([1, 2, 3, 4]) // => [2, 3]
// --> middle([1, 2, 3, 4, 5, 6]) // => [3, 4] 

//We can and should use the assertArraysEqual function for testing our new function 


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


//Test Assertions
// TEST/ASSERTION FUNCTIONS
//const eqArrays = function(...) {
  //...
//}

//const assertArraysEqual = function(actual, expected) {
  //...
}

// ACTUAL FUNCTION
//const middle = function(array) {
  //...
//}

// TEST CODE
// ...

