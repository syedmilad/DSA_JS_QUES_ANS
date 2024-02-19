console.log(" <h1> You are A deveoper Milad!</h1>");

// check sum zero in Array [2,-3,4,5,1,-4,-6]

// const checkSumZero = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 1; j < array.length; j++) {
//       if (array[i] + array[j] === 0) {
//         return [array[i], array[j]];
//       }
//     }
//   }
//   return false;
// };

// const result = checkSumZero([2, -3, 4, 5, 1, -5, -6]);
// console.log(result);

function checkSumZero(myArray) {
  let left = 0;
  let right = myArray.length - 1;
  let sum;

  while (left < right) {
    sum = myArray[left] + myArray[right];
    if (sum === 0) {
      return [myArray[left], myArray[right]];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}

const result = checkSumZero([-5, -4, -3, 0, 2, 4, 6, 8]);
console.log(result);
