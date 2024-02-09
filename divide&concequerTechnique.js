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
