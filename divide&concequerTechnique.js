// Find the the number of index in sorted array 7
//  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// Divide And concequer Technique

// let min = 0 // element 1
// let max = array.length - 1  // element 15 // index = 14
// let midIndex = min + max / 2 = 7(index) 8(element)
// if(array[midIndex] < number(7))
// min =minIndex+1
// if(array[midIndex] > number(7))
// max = midIndex-1 // min= 0; max = 6 {1,2,3,4,5,6,7}
// min + max / 2 = 3
//  MidIndex+1 = 4 (min) max =6 {5,6,7}
// min (4) + max (6) = 10  // min = 6 max = 6
// min (6) + max (6) / 2 = 6
//else midIndex =>, element = 7;

const divideAndConquer = (array, number) => {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let midInd = Math.floor((min + max) / 2);
    console.log(`midIndex is ${midInd} === Min is ${min} == Max is ${max}`);
    if (array[midInd] < number) {
      min = midInd + 1;
    } else if (array[midInd] > number) {
      max = midInd - 1;
    } else {
      return midInd;
    }
  }
  return -1;
};

const result = divideAndConquer(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  7
);
console.log(result);

/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
// var doSearch = function (array, targetValue) {
//   var min = 0;
//   var max = array.length - 1;

//   while (min < max) {
//     let midIndex = Math.floor((min + max) / 2);
//     if (array[midIndex] < targetValue) {
//       min = midIndex - 1;
//     } else if (array[midIndex] > targetValue) {
//       max = midIndex + 1;
//     } else {
//       return midIndex;
//     }
//   }

//   return -1;
// };

// var primes = [
//   2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
//   73, 79, 83, 89, 97,
// ];

// var result = doSearch(primes, 100);
// console.log(result);
//Program.assertEqual(doSearch(primes, 73), 20);
