// console.log(" <h1> You are A deveoper Milad!</h1>");

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

// function checkSumZero(myArray) {
//   let left = 0;
//   let right = myArray.length - 1;
//   let sum;

//   while (left < right) {
//     sum = myArray[left] + myArray[right];
//     if (sum === 0) {
//       return [myArray[left], myArray[right]];
//     } else if (sum < 0) {
//       left++;
//     } else {
//       right--;
//     }
//   }
// }

// const result = checkSumZero([-5, -4, -3, 0, 2, 4, 6, 8]);
// console.log(result);

// check anagram string "Milad" => "dalim"

// const anagram = (str) => {
//   let result = [];
//   function helperRecursive(myString) {
//     const result = myString.split("");
//     console.log(typeof result);
//     if (myString) {
//       result.push(myString[0]);
//     }
//     helperRecursive(myString.slice(1));
//   }

//   helperRecursive(str);
//   return result;
// };

// const result2 = anagram("milad");
// console.log(result2);

// binary searching algorithm

// array = [1,2,3,4,5,6,7,8,9,10,11] mujhn 6 ka index chaiye 
// koi bhi array ka element ka index muhjn chiaye hou tu hum binary search alogorithm use karaingy

// sudo code for coding 
// find the number 6 in array
// let min = 0;
// let max = array.lenght - 1;
// midIndex = (min + max) / 2 = 5
// if(array[mindex] < array[inputNumber]){
  // midIndex = 
// }