// Insertions sort algorithm
// [5,8,3,2,1,6,7,9];

// const insertionSort = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[min]) {
//         min = j;
//       }
//     }
//     if (i !== min) {
//       temp = array[i];
//       array[i] = array[min];
//       array[min] = temp;
//     }
//   }
//   return array;
// };

// const result = insertionSort([5, 8, 3, 2, 1, 6, 7, 9]);
// console.log(result);

const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
};

const result = insertionSort([5, 8, 3, 2, 1, 6, 7, 9]);
console.log(result);
