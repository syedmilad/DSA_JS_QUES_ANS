// Problems #1
// array [-5,-4,-3,-2,0,2,4,6,8]; // this is sorted array
// results [-4,4] = zero 0
// solutions -1-

const sumArrayPariZero = (array) => {
  for (const number of array) {
    for (let j = 1; j < array.length; j++) {
      let newArr = [];
      newArr.push(number + array[j] === 0);
      return newArr;
    }
  }
};
const arrayWithSort = [-5, 6, 8, -2, 0, 12, 5, 5, 2, -4, -3, 4];
const newSet = new Set(arrayWithSort);
const ans = arrayWithSort.sort((a, b) => a - b);
const ans1 = [...newSet];
const ans2 = ans1.sort((a, b) => a - b);

// console.log(sumArrayPariZero([-5,-4,-3,-2,0,2,4,6,8]))
// console.log(sumArrayPariZero(ans2));

// n (n^) quadratic time complexity

// console.log(ans);
// console.log(ans2);
// n (n) linear time complexity

// Problems #1
// array [-5,-4,-3,-2,0,2,4,6,8]; // this is sorted array
// results [-4,4] = zero 0
// solutions -2 with DSA Appraoch

function arrayPairSum(array) {
  let left = 0;
  let right = array.length - 1;
  let sum;

  while (left < right) {
    sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}

const result = arrayPairSum([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result)
